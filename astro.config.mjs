import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// Honest sitemap lastmod: the last git commit that touched the files a page is
// built from. If git history is not available, lastmod is left out.
const lastmodCache = new Map();
function gitDate(files) {
  const list = files.filter((f) => existsSync(f));
  if (!list.length) return undefined;
  const key = list.join('|');
  if (lastmodCache.has(key)) return lastmodCache.get(key);
  let date;
  try {
    const out = execSync(`git log -1 --format=%cI -- ${list.map((f) => `"${f}"`).join(' ')}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    date = out || undefined;
  } catch { date = undefined; }
  lastmodCache.set(key, date);
  return date;
}
function sourceFiles(url) {
  const path = url.replace('https://buildhire.com.au', '');
  const parts = path.split('/').filter(Boolean);
  if (!parts.length) return ['src/pages/index.astro'];
  const [top, a] = parts;
  if (top === 'equipment' && a) return [`src/pages/equipment/${a}.astro`, 'src/data/equipment.ts'];
  if (top === 'blog' && a) return [`src/pages/blog/${a}.astro`];
  if (top === 'faq' && a) return ['src/data/faqs.ts', 'src/pages/faq/[slug].astro'];
  if (top === 'answers' && a) return ['src/data/aeo-answers.ts', 'src/pages/answers/[slug].astro'];
  if (top === 'service-areas' && a) return ['src/data/serviceAreaContent.ts', 'src/pages/service-areas/[locationSlug].astro'];
  if (top === 'industries' && a) return [`src/pages/industries/${a}.astro`, 'src/data/industries.ts'];
  if (top === 'hire') return ['src/pages/hire/[equipmentSlug]/[locationSlug].astro', 'src/data/locations.ts', 'src/data/equipment.ts'];
  return [`src/pages/${parts.join('/')}.astro`, `src/pages/${parts.join('/')}/index.astro`];
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await htmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path);
    }
  }
  return files;
}

function deliveryCopyGuard() {
  const replacement = 'Delivery and collection are quoted after BuildHire receives the site and hire details.';
  const legacyDeliveryPrice = /(?:Delivery|delivery)(?:\s|&amp;|&|and|collection|within|metro|is|are|charged|separately|starts|from|to|-){0,110}\$[\d,]+(?:\s*(?:–|-|to)\s*\$[\d,]+)?[^.<]*\.?/gi;
  const legacyDeliverVerbPrice = /(?:BuildHire\s+)?deliver(?:s|y|ing)?[^.<>]{0,180}\$[\d,]+(?:\s*\([^)<>]*\))?(?:\s*(?:or|and)\s*\$[\d,]+(?:\s*\([^)<>]*\))?)?[^.<]*\./gi;
  const bookingDeadline = /Book by \d{1,2}(?::\d{2})?\s*(?:am|pm)\s*for next-day delivery to [^.<]+\./gi;
  const includedDeliveryPricing = /(?:transparent\s+)?pricing that includes delivery, collection,? and GST/gi;
  const instantPriceClaim = /(?:Our\s+)?online booking(?:\s+system)?\s+(?:gives you|gives)\s+an instant price in under 60 seconds[^.]*\./gi;

  return {
    name: 'buildhire-delivery-copy-guard',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const files = await htmlFiles(fileURLToPath(dir));
        for (const file of files) {
          const html = await readFile(file, 'utf8');
          // Phrase swaps are safe anywhere. The sentence rewrites only run on
          // visible body text, never on <head> (titles, meta) or <script>
          // (JSON-LD), where a regex splice breaks the tag or the JSON.
          const phraseSwaps = (text) => text
            .replace(includedDeliveryPricing, 'hire pricing and delivery confirmed for the specific job')
            .replace(/next-day delivery/gi, (m) => (m[0] === 'N' ? 'Delivery subject to availability' : 'delivery subject to availability'))
            .replace(/for an instant price/gi, 'to start a quote request');
          const sentenceRewrites = (text) => text
            .replace(bookingDeadline, 'Share your equipment, dates and site details to confirm availability and a delivery quote.')
            .replace(legacyDeliverVerbPrice, replacement)
            .replace(legacyDeliveryPrice, replacement)
            .replace(instantPriceClaim, 'Use the online booking flow to share your equipment and hire details, then confirm availability and delivery with BuildHire.');
          const headEnd = html.indexOf('</head>');
          const head = headEnd === -1 ? '' : html.slice(0, headEnd);
          const body = headEnd === -1 ? html : html.slice(headEnd);
          const normalised = phraseSwaps(head) + body
            .split(/(<script[\s\S]*?<\/script>)/i)
            .map((part, i) => (i % 2 ? phraseSwaps(part) : phraseSwaps(sentenceRewrites(part))))
            .join('');
          if (normalised !== html) await writeFile(file, normalised);
        }
      },
    },
  };
}

export default defineConfig({
  trailingSlash: 'always',
  site: 'https://buildhire.com.au',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    deliveryCopyGuard(),
    sitemap({
      filter: (page) => {
        // Exclude payment pages
        if (page.includes('/payment-success') || page.includes('/payment-cancelled')) return false;

        // Noindex category pages stay out of the sitemap
        if (page.includes('/category/')) return false;

        // Wave 1: Include all /hire/[equipment]/[location]/ pages (738 pages — highest commercial intent)
        // Exclude deeper /hire/ sub-pages (industry, use-case, faq) — too large for current DA
        if (page.includes('/hire/')) {
          const hireParts = page.replace('https://buildhire.com.au', '').split('/').filter(Boolean);
          // Allow /hire/[eq]/[loc]/ (3 parts) only — not /hire/[eq]/[loc]/[sub]/ (4 parts)
          return hireParts.length === 3;
        }

        // /compare/ and /for/ — deferred to Wave 2 & 4 (separate deploys to stay within Netlify build limits)
        if (page.includes('/compare/')) return false;
        if (page.includes('/for/')) return false;

        return true;
      },
      serialize(item) {
        const lastmod = gitDate(sourceFiles(item.url));
        if (lastmod) item.lastmod = lastmod;
        // Homepage
        if (item.url === 'https://buildhire.com.au/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Job title pages (/for/[jobTitle]/[industry]/[location])
        else if (item.url.match(/\/for\/[^\/]+\/[^\/]+\/[^\/]+\/$/))
        {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        }
        // Deep competitor comparison pages (/compare/[competitor]/[industry]/[location])
        else if (item.url.match(/\/compare\/[^\/]+\/[^\/]+\/[^\/]+\/$/))
        {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // AEO answer pages (/answers/[slug])
        else if (item.url.match(/\/answers\/[^\/]+\/$/))
        {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        }
        // Core hire pillar pages (equipment × location)
        else if (item.url.match(/\/hire\/[^\/]+\/[^\/]+\/$/)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } 
        // Industry sub-pages (/hire/[equipment]/[location]/[industry])
        else if (item.url.match(/\/hire\/[^\/]+\/[^\/]+\/[^\/]+\/$/) ) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Top-level competitor pages (/compare/[competitor])
        else if (item.url.match(/\/compare\/[^\/]+\/$/))
        {
          item.priority = 0.75;
          item.changefreq = 'monthly';
        }
        // Service area pages (/service-areas/ and /service-areas/[slug]/)
        else if (item.url.includes('/service-areas/')) {
          item.priority = item.url === 'https://buildhire.com.au/service-areas/' ? 0.9 : 0.85;
          item.changefreq = 'monthly';
        }
        // Industries hub and sub-pages (/industries/ and /industries/[slug]/)
        else if (item.url.includes('/industries/')) {
          item.priority = item.url === 'https://buildhire.com.au/industries/' ? 0.9 : 0.85;
          item.changefreq = 'weekly';
        }
        // Equipment pages (/equipment/[slug]/)
        else if (item.url.includes('/equipment/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Blog posts
        else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Default
        else {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
  output: 'static',
  vite: {
    preview: {
      allowedHosts: true,
    },
    server: {
      allowedHosts: true,
    },
  },
});

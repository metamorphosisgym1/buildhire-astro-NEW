import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith('.html') ? [path] : [];
  }));
  return files.flat();
}

function deliveryCopyGuard() {
  const replacement = 'Delivery and collection are quoted after BuildHire receives the site and hire details.';
  const legacyDeliveryPrice = /(?:Delivery|delivery)(?:\s|&amp;|&|and|collection|within|metro|is|are|charged|separately|starts|from|to|-){0,110}\$[\d,]+(?:\s*(?:–|-|to)\s*\$[\d,]+)?[^.<]*\.?/gi;
  const legacyDeliverVerbPrice = /(?:BuildHire\s+)?deliver(?:s|y|ing)?[^.]{0,180}\$[\d,]+(?:\s*\([^)]*\))?(?:\s*(?:or|and)\s*\$[\d,]+(?:\s*\([^)]*\))?)?[^.]*\./gi;
  const bookingDeadline = /Book by \d{1,2}(?::\d{2})?\s*(?:am|pm)\s*for next-day delivery to [^.]+\./gi;
  const includedDeliveryPricing = /(?:transparent\s+)?pricing that includes delivery, collection,? and GST/gi;
  const instantPriceClaim = /(?:Our\s+)?online booking(?:\s+system)?\s+(?:gives you|gives)\s+an instant price in under 60 seconds[^.]*\./gi;

  return {
    name: 'buildhire-delivery-copy-guard',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const files = await htmlFiles(fileURLToPath(dir));
        await Promise.all(files.map(async (file) => {
          const html = await readFile(file, 'utf8');
          const normalised = html
            .replace(bookingDeadline, 'Share your equipment, dates and site details to confirm availability and a delivery quote.')
            .replace(legacyDeliverVerbPrice, replacement)
            .replace(legacyDeliveryPrice, replacement)
            .replace(includedDeliveryPricing, 'hire pricing and delivery confirmed for the specific job')
            .replace(instantPriceClaim, 'Use the online booking flow to share your equipment and hire details, then confirm availability and delivery with BuildHire.')
            .replace(/next-day delivery/gi, 'delivery subject to availability')
            .replace(/for an instant price/gi, 'to start a quote request');
          if (normalised !== html) await writeFile(file, normalised);
        }));
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
      customPages: [
        'https://buildhire.com.au/service-areas/',
        ...['sydney','parramatta','penrith','liverpool','campbelltown','blacktown','castle-hill','hornsby','sutherland','chatswood','st-george','newcastle','wollongong','manly','bondi','bankstown','inner-west','northern-beaches','eastern-suburbs','hills-district','baulkham-hills','kellyville','rouse-hill','marsden-park','box-hill','schofields','riverstone','windsor','richmond','oran-park','leppington','edmondson-park','gregory-hills','narellan','camden','picton','appin','minto','fairfield','cabramatta','cronulla','ryde','strathfield','auburn','seven-hills','merrylands'].map(s => `https://buildhire.com.au/service-areas/${s}/`),
      ],
      filter: (page) => {
        // Exclude payment pages
        if (page.includes('/payment-success') || page.includes('/payment-cancelled')) return false;

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

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  trailingSlash: 'always',
  site: 'https://buildhire.com.au',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      customPages: [
        'https://buildhire.com.au/service-areas/',
        ...['sydney','parramatta','penrith','liverpool','campbelltown','blacktown','castle-hill','hornsby','sutherland','chatswood','st-george','newcastle','wollongong','manly','bondi','bankstown','inner-west','northern-beaches','eastern-suburbs','hills-district','baulkham-hills','kellyville','rouse-hill','marsden-park','box-hill','schofields','riverstone','windsor','richmond','oran-park','leppington','edmondson-park','gregory-hills','narellan','camden','picton','appin','minto','fairfield','cabramatta','cronulla','ryde','strathfield','auburn','seven-hills','merrylands'].map(s => `https://buildhire.com.au/service-areas/${s}/`),
      ],
      filter: (page) => {
        // Exclude payment pages (these should never be indexed)
        if (page.includes('/payment-success') || page.includes('/payment-cancelled')) return false;
        // Exclude FAQ sub-pages (noindexed — near-duplicate content across 83 locations)
        // Pattern: /hire/[equipment]/[location]/[faq-slug]/ where faq-slug looks like a question
        if (page.match(/\/hire\/[^\/]+\/[^\/]+\/[^\/]+\/$/) &&
            (page.includes('how-') || page.includes('what-') || page.includes('do-') ||
             page.includes('can-') || page.includes('is-') || page.includes('are-') ||
             page.includes('why-') || page.includes('when-') || page.includes('does-') ||
             page.includes('will-') || page.includes('which-') || page.includes('cost') ||
             page.includes('price') || page.includes('need-') || page.includes('much-'))) {
          return false;
        }
        // Exclude use-case hub pages without location (noindexed — location-specific pages are canonical)
        if (page.includes('/use-case/') && page.match(/\/hire\/[^\/]+\/use-case\/[^\/]+\/$/) ) {
          return false;
        }
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

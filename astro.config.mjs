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
      filter: (page) =>
        !page.includes('/payment-success') &&
        !page.includes('/payment-cancelled'),
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
        // Use-case sub-pages
        else if (item.url.match(/\/hire\/[^\/]+\/[^\/]+\/[^\/]+\/$/) && !item.url.includes('how') && !item.url.includes('what') && !item.url.includes('do-') && !item.url.includes('can-')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // FAQ sub-pages
        else if (item.url.match(/\/hire\/[^\/]+\/[^\/]+\/[^\/]+\/$/)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Top-level competitor pages (/compare/[competitor])
        else if (item.url.match(/\/compare\/[^\/]+\/$/))
        {
          item.priority = 0.75;
          item.changefreq = 'monthly';
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

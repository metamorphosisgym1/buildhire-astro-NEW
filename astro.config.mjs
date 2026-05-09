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
        // Pillar pages
        if (item.url.match(/\/hire\/[^\/]+\/[^\/]+\/$/)) {
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
        // Comparison pages
        else if (item.url.includes('/compare/')) {
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

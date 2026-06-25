// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL. Custom domain served via GitHub Pages + Namecheap DNS.
export default defineConfig({
  site: 'https://sugarglidersph.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});

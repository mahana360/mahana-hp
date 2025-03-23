import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahana-organic.com', // サイトのURL
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://mahana-organic.com/sitemap.xml', // サイトマップのURL
    }),
  ],
});

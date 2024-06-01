import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import astroExpressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    sitemap(),
    react(),
    astroExpressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ['monokai'],
      shiki: {
        // You can pass additional plugin options here,
        // e.g. to load custom language grammars:
      },
    }),
  ],
});

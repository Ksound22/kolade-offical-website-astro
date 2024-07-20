import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import astroExpressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.koladechris.com',
  integrations: [
    sitemap(),
    astroExpressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      themes: ['monokai'],
    }),
  ],
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { settings, content } from './src/site.config';
import { siteUrl } from './src/lib/seo';

export default defineConfig({
  site: siteUrl(settings),
  i18n: {
    locales: settings.languages,
    defaultLocale: settings.defaultLanguage,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: settings.defaultLanguage,
        locales: Object.fromEntries(
          settings.languages.map((code) => [code, content[code].meta.locale.replace('_', '-')]),
        ),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

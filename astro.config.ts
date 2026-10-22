import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { settings } from './src/site.config';

export default defineConfig({
  i18n: {
    locales: settings.languages,
    defaultLocale: settings.defaultLanguage,
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

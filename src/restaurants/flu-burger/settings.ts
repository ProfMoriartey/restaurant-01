import type { Settings } from '../../lib/types';

export const settings: Settings = {
  name: 'Flu Burger',
  theme: 'flu-burger',
  languages: ['tr', 'en'],
  defaultLanguage: 'tr',
  logo: { src: '/restaurants/flu-burger/logo.jpg', width: 150, height: 150 },
  icons: {
    favicon: '/restaurants/flu-burger/favicon-32.png',
    appleTouch: '/restaurants/flu-burger/apple-touch-icon.png',
  },
  // Set once the domain is connected; until then Vercel's production address is used.
  // siteUrl: 'https://fluburger.com',
  seo: { cuisine: ['Burgers', 'Hot dogs', 'Fast food'], priceRange: '₺₺' },
  sections: {
    hero: true,
    menu: false,
    infoStrip: true,
    categories: true,
    order: true,
    franchise: false,
    contact: true,
  },
  // Placeholder: central Bursa until the restaurant's address arrives.
  mapEmbedUrl: 'https://www.google.com/maps?q=Bursa,+Turkey&output=embed',
  // Placeholder links until the restaurant's accounts are confirmed.
  social: [
    { platform: 'instagram', url: '#' },
    { platform: 'facebook', url: '#' },
    { platform: 'tiktok', url: '#' },
    { platform: 'whatsapp', url: '#' },
  ],
  timeZone: 'Europe/Istanbul',
  // The full menu. To send each language to its own page: { tr: '…', en: '…' }.
  menuUrl: 'https://www.menu-pedia.com/en/fluburger',
  quickActions: ['menu', 'call', 'directions', 'order'],
};

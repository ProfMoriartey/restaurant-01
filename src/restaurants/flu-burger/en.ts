import type { Content } from '../../lib/types';

// Placeholder text until the restaurant sends its own.
export const en: Content = {
  languageName: 'English',
  meta: {
    title: 'Flu Burger | Bursa',
    description: 'Burgers and hot dogs in Bursa. Menu, ordering and contact details.',
  },
  nav: {
    categories: 'Menu',
    order: 'Order',
    contact: 'Contact',
  },
  ui: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Language',
  },
  hero: {
    headline: ["Bursa's *favourite*", 'burger & hot dog', 'spot!'],
    paragraphs: [
      'A short introduction to the restaurant goes here: how it started and what makes it different.',
      'A second paragraph will cover the ingredients and how the food is made.',
      'A third paragraph will invite guests in.',
    ],
  },
};

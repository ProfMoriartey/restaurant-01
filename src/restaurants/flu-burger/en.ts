import type { Content } from '../../lib/types';

// Placeholder text, contact details and links until the restaurant sends its own.
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
  menu: {
    title: 'Menu',
    tagline: 'Hungry? Take a look at our menu.',
  },
  infoStrip: [
    { icon: 'clock', line1: 'Open every day', line2: '11:00 – 23:00' },
    { icon: 'delivery', line1: 'Delivery', line2: 'On food delivery apps' },
    { icon: 'star', line1: 'Fresh and handmade', line2: 'Made every day' },
    { icon: 'pin', line1: 'Bursa', line2: 'Come eat with us' },
  ],
  categories: {
    title: 'Menu',
    items: [
      { name: 'Burgers', description: 'A short category description goes here.', href: '#', art: 'burger' },
      { name: 'Hot dogs', description: 'A short category description goes here.', href: '#', art: 'hotdog' },
      { name: 'Sides', description: 'A short category description goes here.', href: '#', art: 'fries' },
      { name: 'Drinks', description: 'A short category description goes here.', href: '#', art: 'drink' },
    ],
  },
  order: {
    title: 'Order online',
    noApps: 'Ordering links coming soon.',
  },
  visit: {
    title: 'Or come eat here',
    text: 'Address details go here, Bursa.',
    directions: 'Get directions',
    mapTitle: 'Flu Burger on the map',
  },
  franchise: {
    title: 'Franchise',
    intro: 'Want to join us? Fill in the form and we will get back to you.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'tel', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Your message', type: 'textarea', wide: true },
    ],
    submit: 'Send',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Open every day!',
    labels: { phone: 'Phone', email: 'Email', address: 'Address', hours: 'Opening hours' },
    rights: 'All rights reserved.',
  },
  locations: [
    {
      name: 'Flu Burger Bursa',
      phone: '+90 224 000 00 00',
      email: 'info@example.com',
      address: 'Address to be added, Bursa',
      hours: ['Every day 11:00 – 23:00'],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bursa',
      deliveryApps: [
        { name: 'Yemeksepeti', url: '#' },
        { name: 'Getir', url: '#' },
        { name: 'Trendyol Yemek', url: '#' },
      ],
    },
  ],
};

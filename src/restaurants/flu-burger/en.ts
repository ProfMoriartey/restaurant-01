import type { Content } from '../../lib/types';

// Placeholder text, contact details and links until the restaurant sends its own.
export const en: Content = {
  languageName: 'English',
  meta: {
    title: 'Flu Burger | Bursa',
    description: 'Burgers and hot dogs in Bursa. Menu, ordering and contact details.',
    locale: 'en_US',
    shareImage: { src: '/restaurants/flu-burger/share-en.png', alt: 'Flu Burger: burgers and hot dogs in Bursa', width: 1200, height: 630 },
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
    quickActions: { menu: 'Menu', call: 'Call', directions: 'Directions', order: 'Order', whatsapp: 'WhatsApp' },
    status: { open: 'Open now', closed: 'Closed now', closes: 'Closes', opens: 'Opens', tomorrow: 'tomorrow' },
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
    { icon: 'clock', line1: 'Open every day', line2: '11:00 – 23:00', showStatus: true },
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
    badge: 'Fast & hot delivery',
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
    consent: 'I have read the *privacy notice*.',
    submit: 'Send',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Open every day!',
    labels: { phone: 'Phone', email: 'Email', address: 'Address', hours: 'Opening hours' },
    directions: 'Get directions',
    mapTitle: 'Flu Burger on the map',
    map: { notice: 'The map is provided by Google. Once loaded, Google may use cookies.', show: 'Show map' },
    privacyLink: 'Privacy',
    rights: 'All rights reserved.',
  },
  privacy: {
    slug: 'privacy',
    title: 'Privacy and Personal Data Protection',
    updated: 'Last updated: 22 October 2026',
    draftNote:
      'Draft: the details in square brackets must be filled in, and a lawyer should check the text before it is published.',
    intro:
      'Under Article 10 of the Turkish Personal Data Protection Law No. 6698 (KVKK), this notice explains how your personal data is processed when you visit this website and when you contact us. The Turkish version is the binding one.',
    sections: [
      {
        heading: 'Data controller',
        paragraphs: [
          'The data controller is [Company name] ("Flu Burger"), [Full address], Bursa. MERSİS no: [MERSİS number]. Contact: [email address], [phone].',
        ],
      },
      {
        heading: 'Personal data we process',
        paragraphs: [
          'Website usage data: when you visit the site, the servers of the company hosting it automatically keep technical logs such as your IP address, the date and time of your visit, and your browser and device details.',
          'Contact data: the name, phone number, email address and message you share when you call us or write to us by email or WhatsApp.',
        ],
      },
      {
        heading: 'Purposes and legal grounds',
        paragraphs: [
          'Technical logs are processed to keep the site secure and running, fix errors and prevent misuse, on the legal ground that processing is necessary for our legitimate interests (KVKK Art. 5/2(f)).',
          'Contact data is processed to answer your requests, on the legal grounds of forming or performing a contract (KVKK Art. 5/2(c)) and our legitimate interests (Art. 5/2(f)).',
        ],
      },
      {
        heading: 'Transfers',
        paragraphs: [
          'The site is published through a hosting service with servers outside Turkey: [hosting provider, e.g. Vercel Inc., USA]. Technical logs are processed by this provider and may therefore be transferred abroad. Such transfers are made in line with the conditions in KVKK Art. 9.',
          'Your personal data may be shared with authorised public bodies where the law requires it.',
        ],
      },
      {
        heading: 'Google Maps and links to other websites',
        paragraphs: [
          'The map in the contact section does not load until you press "Show map". Once you load it, Google processes data such as your IP address under its own privacy policy and may use cookies.',
          'Links to food delivery apps, social media accounts and the menu website lead to other companies\' websites, where your data is processed under their own policies.',
        ],
      },
      {
        heading: 'Cookies',
        paragraphs: [
          'This site does not use cookies. Your choice to load the map is stored only in your own browser (local storage) and is never sent to us.',
        ],
      },
      {
        heading: 'How long we keep data',
        paragraphs: [
          'Personal data is kept for as long as the purpose requires and the law prescribes, and is then deleted, destroyed or anonymised. [Retention period for technical logs]',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'Under KVKK Art. 11 you have the right to learn whether your personal data is processed; to request information about it; to learn the purpose of processing and whether it is used accordingly; to know the third parties in Turkey or abroad it is transferred to; to have it corrected if it is incomplete or wrong; to have it deleted or destroyed when the conditions are met; to have these steps reported to the third parties it was transferred to; to object to a result against you arising solely from automated analysis; and to claim compensation for damage caused by unlawful processing.',
        ],
      },
      {
        heading: 'How to apply',
        paragraphs: [
          'You can send your request in writing to [full address] or through [registered electronic mail (KEP) or registered email address], in line with the Communiqué on the Procedures and Principles of Application to the Data Controller. Your request will be answered free of charge as soon as possible and within thirty days at the latest.',
        ],
      },
    ],
    backHome: 'Back to home',
  },
  locations: [
    {
      name: 'Flu Burger Bursa',
      phone: '+90 224 000 00 00',
      email: 'info@example.com',
      address: 'Address to be added, Bursa',
      // Street, district and postal code to be added with the real address.
      postalAddress: { city: 'Bursa', country: 'TR' },
      hours: ['Every day 11:00 – 23:00'],
      openingHours: [{ days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], open: '11:00', close: '23:00' }],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bursa',
      deliveryApps: [
        { name: 'Yemeksepeti', url: '#' },
        { name: 'Getir', url: '#' },
        { name: 'Trendyol Yemek', url: '#' },
      ],
    },
  ],
};

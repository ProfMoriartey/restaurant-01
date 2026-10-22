import type { Content } from '../../lib/types';

// Placeholder text, contact details and links until the restaurant sends its own.
export const tr: Content = {
  languageName: 'Türkçe',
  meta: {
    title: 'Flu Burger | Bursa',
    description: "Bursa'da burger ve sosisli. Menü, sipariş ve iletişim bilgileri.",
  },
  nav: {
    categories: 'Menü',
    order: 'Sipariş',
    contact: 'İletişim',
  },
  ui: {
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    switchLanguage: 'Dil seçimi',
  },
  hero: {
    headline: ["Bursa'nın *en sevilen*", 'burger ve sosisli', 'durağı!'],
    paragraphs: [
      'Restoranın kısa tanıtımı buraya gelecek: nasıl başladı, neyi farklı yapıyor.',
      'İkinci paragraf malzemeleri ve hazırlanışı anlatacak.',
      'Üçüncü paragraf misafirleri içeri davet edecek.',
    ],
  },
  menu: {
    title: 'Menü',
    tagline: 'Acıktın mı? Menümüze göz at.',
  },
  infoStrip: [
    { icon: 'clock', line1: 'Her gün açık', line2: '11:00 – 23:00' },
    { icon: 'delivery', line1: 'Paket servis', line2: 'Yemek uygulamalarında' },
    { icon: 'star', line1: 'Taze ve el yapımı', line2: 'Her gün hazırlanır' },
    { icon: 'pin', line1: 'Bursa', line2: 'Gel, burada ye' },
  ],
  categories: {
    title: 'Menü',
    items: [
      { name: 'Burgerler', description: 'Kategori açıklaması buraya gelecek.', href: '#', art: 'burger' },
      { name: 'Sosisliler', description: 'Kategori açıklaması buraya gelecek.', href: '#', art: 'hotdog' },
      { name: 'Yan lezzetler', description: 'Kategori açıklaması buraya gelecek.', href: '#', art: 'fries' },
      { name: 'İçecekler', description: 'Kategori açıklaması buraya gelecek.', href: '#', art: 'drink' },
    ],
  },
  order: {
    title: 'Online sipariş',
    noApps: 'Sipariş bağlantıları yakında.',
  },
  visit: {
    title: 'Ya da gel burada ye',
    text: 'Adres bilgisi buraya gelecek, Bursa.',
    directions: 'Yol tarifi al',
    mapTitle: 'Flu Burger harita konumu',
  },
  franchise: {
    title: 'Franchise',
    intro: 'Bize katılmak ister misiniz? Formu doldurun, size dönelim.',
    fields: [
      { name: 'name', label: 'Ad soyad', type: 'text', required: true },
      { name: 'city', label: 'Şehir', type: 'text' },
      { name: 'phone', label: 'Telefon', type: 'tel', required: true },
      { name: 'email', label: 'E-posta', type: 'email', required: true },
      { name: 'message', label: 'Mesajınız', type: 'textarea', wide: true },
    ],
    submit: 'Gönder',
  },
  contact: {
    title: 'İletişim',
    subtitle: 'Her gün açığız!',
    labels: { phone: 'Telefon', email: 'E-posta', address: 'Adres', hours: 'Çalışma saatleri' },
    rights: 'Tüm hakları saklıdır.',
  },
  locations: [
    {
      name: 'Flu Burger Bursa',
      phone: '+90 224 000 00 00',
      email: 'info@example.com',
      address: 'Adres eklenecek, Bursa',
      hours: ['Her gün 11:00 – 23:00'],
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Bursa',
      deliveryApps: [
        { name: 'Yemeksepeti', url: '#' },
        { name: 'Getir', url: '#' },
        { name: 'Trendyol Yemek', url: '#' },
      ],
    },
  ],
};

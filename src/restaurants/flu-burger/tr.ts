import type { Content } from '../../lib/types';

// Placeholder text, contact details and links until the restaurant sends its own.
export const tr: Content = {
  languageName: 'Türkçe',
  meta: {
    title: 'Flu Burger | Bursa',
    description: "Bursa'da burger ve sosisli. Menü, sipariş ve iletişim bilgileri.",
    locale: 'tr_TR',
    shareImage: { src: '/restaurants/flu-burger/share-tr.png', alt: 'Flu Burger: Bursa\'nın burger ve sosisli durağı', width: 1200, height: 630 },
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
    quickActions: { menu: 'Menü', call: 'Ara', directions: 'Yol tarifi', order: 'Sipariş', whatsapp: 'WhatsApp' },
    status: { open: 'Şu an açık', closed: 'Şu an kapalı', closes: 'Kapanış', opens: 'Açılış', tomorrow: 'yarın' },
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
    { icon: 'clock', line1: 'Her gün açık', line2: '11:00 – 23:00', showStatus: true },
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
    badge: 'Hızlı ve sıcak teslimat',
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
    consent: "*Aydınlatma Metni*'ni okudum ve anladım.",
    submit: 'Gönder',
  },
  contact: {
    title: 'İletişim',
    subtitle: 'Her gün açığız!',
    labels: { phone: 'Telefon', email: 'E-posta', address: 'Adres', hours: 'Çalışma saatleri' },
    directions: 'Yol tarifi al',
    mapTitle: 'Flu Burger harita konumu',
    map: { notice: 'Harita Google tarafından sağlanır. Yüklendiğinde Google çerez kullanabilir.', show: 'Haritayı göster' },
    privacyLink: 'Gizlilik ve KVKK',
    rights: 'Tüm hakları saklıdır.',
  },
  privacy: {
    slug: 'gizlilik',
    title: 'Gizlilik ve Kişisel Verilerin Korunması',
    updated: 'Son güncelleme: 22 Ekim 2026',
    draftNote:
      'Taslak: Köşeli parantez içindeki bilgiler doldurulmalı ve metin yayından önce bir hukukçu tarafından kontrol edilmelidir.',
    intro:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca, bu web sitesini ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl işlendiğini açıklar.",
    sections: [
      {
        heading: 'Veri sorumlusu',
        paragraphs: [
          'Veri sorumlusu [Şirket unvanı] ("Flu Burger"), [Açık adres], Bursa\'dır. MERSİS no: [MERSİS numarası]. İletişim: [e-posta adresi], [telefon].',
        ],
      },
      {
        heading: 'İşlenen kişisel veriler',
        paragraphs: [
          'Site kullanım verileri: Siteyi ziyaret ettiğinizde, siteyi barındıran hizmet sağlayıcının sunucuları IP adresiniz, ziyaret tarihi ve saati, tarayıcı ve cihaz bilgisi gibi teknik kayıtları otomatik olarak tutar.',
          'İletişim verileri: Bizi aradığınızda veya e-posta ya da WhatsApp ile yazdığınızda paylaştığınız ad, telefon numarası, e-posta adresi ve mesaj içeriği.',
        ],
      },
      {
        heading: 'İşleme amaçları ve hukuki sebepler',
        paragraphs: [
          'Teknik kayıtlar; sitenin güvenli ve kesintisiz çalışması, hataların giderilmesi ve kötüye kullanımın önlenmesi amacıyla, KVKK m. 5/2(f) uyarınca meşru menfaatlerimiz için veri işlemenin zorunlu olması hukuki sebebine dayanarak işlenir.',
          'İletişim verileri; taleplerinizi yanıtlamak amacıyla, KVKK m. 5/2(c) (bir sözleşmenin kurulması veya ifası) ve m. 5/2(f) hukuki sebeplerine dayanarak işlenir.',
        ],
      },
      {
        heading: 'Aktarım',
        paragraphs: [
          'Site, sunucuları yurt dışında bulunan bir barındırma hizmeti üzerinden yayınlanır: [barındırma sağlayıcısı, ör. Vercel Inc., ABD]. Teknik kayıtlar bu hizmet sağlayıcı tarafından işlenir ve bu nedenle yurt dışına aktarılabilir. Yurt dışına aktarım KVKK m. 9\'daki şartlara uygun olarak yapılır.',
          'Kişisel verileriniz, kanuni bir zorunluluk olması hâlinde yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.',
        ],
      },
      {
        heading: 'Google Haritalar ve diğer sitelere bağlantılar',
        paragraphs: [
          'İletişim bölümündeki harita, siz "Haritayı göster" düğmesine basana kadar yüklenmez. Haritayı yüklediğinizde Google, IP adresiniz gibi verileri kendi gizlilik politikasına göre işler ve çerez kullanabilir.',
          'Yemek sipariş uygulamaları, sosyal medya hesapları ve menü sitesi bağlantıları başka şirketlerin sitelerine gider. Bu sitelerde verileriniz o şirketlerin kendi politikalarına göre işlenir.',
        ],
      },
      {
        heading: 'Çerezler',
        paragraphs: [
          'Bu site çerez kullanmaz. Haritayı yükleme tercihiniz yalnızca kendi tarayıcınızda (yerel depolama) saklanır ve bize gönderilmez.',
        ],
      },
      {
        heading: 'Saklama süresi',
        paragraphs: [
          'Kişisel veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen süreler boyunca saklanır; bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir. [Teknik kayıtların saklama süresi]',
        ],
      },
      {
        heading: 'Haklarınız',
        paragraphs: [
          'KVKK m. 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, şartları oluştuğunda silinmesini veya yok edilmesini isteme, bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.',
        ],
      },
      {
        heading: 'Başvuru',
        paragraphs: [
          'Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ\'e uygun olarak yazılı şekilde [açık adres] adresine veya [KEP adresi ya da kayıtlı e-posta adresi] üzerinden iletebilirsiniz. Başvurunuz, niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır.',
        ],
      },
    ],
    backHome: 'Ana sayfaya dön',
  },
  locations: [
    {
      name: 'Flu Burger Bursa',
      phone: '+90 224 000 00 00',
      email: 'info@example.com',
      address: 'Adres eklenecek, Bursa',
      // Street, district and postal code to be added with the real address.
      postalAddress: { city: 'Bursa', country: 'TR' },
      hours: ['Her gün 11:00 – 23:00'],
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

import type { Content, Settings, Weekday } from './types';

/** The live address: the restaurant's own domain, or Vercel's production address until it has one. */
export function siteUrl(settings: Settings) {
  if (settings.siteUrl) return settings.siteUrl;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercel ? `https://${vercel}` : undefined;
}

const dayNames: Record<Weekday, string> = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
};

/** Real links only; placeholders like '#' are left out. */
const isLink = (url?: string): url is string => !!url && /^https?:\/\//.test(url);

/**
 * Restaurant details in schema.org form, which Google reads for maps, search results
 * and the business panel. Built from the same content the page shows.
 */
export function restaurantSchema(settings: Settings, content: Content, pageUrl: URL, site?: string) {
  const absolute = (path: string) => (site ? new URL(path, site).href : undefined);

  return content.locations.map((location) => {
    const { postalAddress: a } = location;
    return {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: location.name,
      url: site ? pageUrl.href : undefined,
      logo: absolute(settings.logo.src),
      image: absolute(content.meta.shareImage.src),
      description: content.meta.description,
      telephone: location.phone.replace(/\s/g, ''),
      email: location.email,
      servesCuisine: settings.seo.cuisine,
      priceRange: settings.seo.priceRange,
      acceptsReservations: false,
      menu: isLink(settings.menuUrl) ? settings.menuUrl : undefined,
      hasMap: isLink(location.directionsUrl) ? location.directionsUrl : undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        addressRegion: a.district,
        addressLocality: a.city,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
      geo: location.geo && { '@type': 'GeoCoordinates', latitude: location.geo.lat, longitude: location.geo.lng },
      openingHoursSpecification: location.openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days.map((d) => dayNames[d]),
        opens: h.open,
        closes: h.close,
      })),
      sameAs: settings.social.map((s) => s.url).filter(isLink),
    };
  });
}

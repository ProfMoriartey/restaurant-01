import type { Content, Settings, Weekday } from './types';
import { withBase } from './paths';

/**
 * The live address: the restaurant's own domain, else SITE_URL from the build (set by the
 * GitHub Pages workflow), else Vercel's production address.
 */
export function siteUrl(settings: Settings) {
  if (settings.siteUrl) return settings.siteUrl;
  if (process.env.SITE_URL) return process.env.SITE_URL;
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
export function restaurantSchema(settings: Settings, content: Content, lang: string, pageUrl: URL, site?: string) {
  const absolute = (path: string) => (site ? new URL(withBase(path), site).href : undefined);

  // Same as menuHref in nav.ts, which can't be imported here: astro.config loads this file.
  const menuUrl = typeof settings.menuUrl === 'string' ? settings.menuUrl : settings.menuUrl?.[lang];

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
      menu: isLink(menuUrl) ? menuUrl : undefined,
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

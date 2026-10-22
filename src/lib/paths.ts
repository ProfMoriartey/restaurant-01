/**
 * Adds the folder the site is hosted under, e.g. /restaurant-01 on GitHub Pages,
 * to a path from the content files such as '/restaurants/flu-burger/logo.jpg'.
 * Full links and in-page anchors are left as they are.
 */
export function withBase(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}

import { ALL_SERVICES_DATA } from './servicesData';

/** Every page of the site and its public URL path. */
export const PAGE_PATHS: Record<string, string> = {
  home: '/',
  about: '/about',
  contact: '/contact',
  ...Object.fromEntries(Object.keys(ALL_SERVICES_DATA).map((id) => [id, `/${id}`]))
};

export const pageHref = (pageId: string): string => PAGE_PATHS[pageId] ?? '/';

const normalise = (pathname: string): string => pathname.replace(/\/+$/, '') || '/';

/** Returns the page id for a URL path, or null when the path is not a page of this site. */
export const pageFromPath = (pathname: string): string | null =>
  Object.keys(PAGE_PATHS).find((id) => PAGE_PATHS[id] === normalise(pathname)) ?? null;

/** Old links used `/#about` style addresses; this maps them to a page id so they keep working. */
export const pageFromLegacyHash = (hash: string): string | null => {
  const id = hash.replace(/^#/, '');
  return id in PAGE_PATHS ? id : null;
};

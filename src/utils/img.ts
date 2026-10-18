/** WebP images ship in two widths: `name.webp` (1280w) and `name-640.webp` (640w). */
export const smallSrc = (src: string): string => src.replace(/\.webp$/, '-640.webp');

export const srcSetFor = (src: string): string =>
  `${smallSrc(src)} 640w, ${src.replace(/\.webp$/, '-828.webp')} 828w, ${src} 1280w`;

export const CARD_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

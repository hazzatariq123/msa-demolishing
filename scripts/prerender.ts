/**
 * Post-build step (run with tsx after `vite build`).
 *
 * Turns dist/index.html into one complete HTML file per page (/, /about, /contact and the four service
 * pages) so search engines and link previews get the right title, description, canonical URL, structured
 * data, heading and hero image without running any JavaScript. Also writes 404.html, sitemap.xml and
 * robots.txt for the real site address.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { HERO_SHELLS } from '../src/data/heroShells';
import { PAGE_PATHS } from '../src/data/routes';
import { PAGES_SEO, buildPageSchema } from '../src/utils/seo';

const OLD_ORIGIN = 'https://ais-dev-4ria3ffxyzwmxx7dcoyb5j-803648951003.asia-southeast1.run.app';
const DEFAULT_ORIGIN = 'https://www.msademolition.com';

const origin = (process.env.SITE_URL || process.env.APP_URL || DEFAULT_ORIGIN).replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = readFileSync('dist/index.html', 'utf8').split(OLD_ORIGIN).join(origin);

const widths = (image: string): string =>
  [
    ['-640', 640],
    ['-750', 750],
    ['-828', 828],
    ['', 1280]
  ]
    .map(([suffix, width]) => `${image.replace(/\.webp$/, `${suffix}.webp`)} ${width}w`)
    .join(', ');

const navLinks = [
  ['home', 'Home'],
  ['about', 'About Us'],
  ['building-demolition', 'Building Demolition'],
  ['industrial-demolition', 'Industrial Demolition'],
  ['interior-stripout', 'Interior Strip-Out'],
  ['infrastructure-demolition', 'Infrastructure Demolition'],
  ['contact', 'Contact']
];

function shell(pageId: string): string {
  const hero = HERO_SHELLS[pageId];
  return `<section class="sh-hero" aria-label="${escapeHtml(hero.label)} Introduction">
          <img class="sh-hero-img" src="${hero.image.replace(/\.webp$/, '-750.webp')}" srcset="${widths(hero.image)}" sizes="100vw" width="1280" height="714" fetchpriority="high" decoding="async" alt="${escapeHtml(hero.title)} - MSA Demolishing, Dubai">
          <div class="sh-scrim"></div>
          <div class="sh-content">
            <p class="sh-eyebrow">${escapeHtml(hero.eyebrow)}</p>
            <h1 class="sh-h1">${escapeHtml(hero.title)}</h1>
            <p class="sh-p">${escapeHtml(hero.description)}</p>
          </div>
        </section>
        <nav class="sh-nav" aria-label="Site pages"><ul>${navLinks
          .map(([id, label]) => `<li><a href="${PAGE_PATHS[id]}">${label}</a></li>`)
          .join('')}</ul></nav>`;
}

function head(pageId: string): string {
  const seo = PAGES_SEO[pageId];
  const hero = HERO_SHELLS[pageId];
  const url = `${origin}${PAGE_PATHS[pageId]}`;
  const image = `${origin}${seo.ogImage}`;
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  return [
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:alt" content="${escapeHtml(hero.title)} - MSA Demolishing, Dubai">`,
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<link rel="preload" as="image" imagesrcset="${widths(hero.image)}" imagesizes="100vw" fetchpriority="high">`,
    `<script type="application/ld+json" id="schema-page">${JSON.stringify(buildPageSchema(pageId, origin))}</script>`
  ].join('\n    ');
}

function render(pageId: string): string {
  const seo = PAGES_SEO[pageId];
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace('<!--page-meta-->', () => head(pageId))
    .replace('<!--page-shell-->', () => shell(pageId));
}

for (const pageId of Object.keys(PAGE_PATHS)) {
  const path = PAGE_PATHS[pageId];
  if (path === '/') {
    writeFileSync('dist/index.html', render(pageId));
  } else {
    mkdirSync(`dist${path}`, { recursive: true });
    writeFileSync(`dist${path}/index.html`, render(pageId));
  }
}

// 404 page: tiny, static, no app bundle, never indexed.
writeFileSync(
  'dist/404.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>Page not found | MSA Demolishing</title>
    <link rel="icon" type="image/png" href="/favicon.png">
    <style>
      body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#fff;color:#171717;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:center;padding:24px}
      img{width:220px;height:auto}
      h1{font-size:28px;margin:24px 0 8px}
      p{margin:0 0 24px;color:#525252}
      a.btn{display:inline-block;background:#df5e21;color:#fff;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:8px}
      ul{list-style:none;padding:0;margin:24px 0 0;display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:center}
      ul a{color:#a94718}
    </style>
  </head>
  <body>
    <main>
      <img src="/images/MSA-logo-300.webp" width="300" height="114" alt="MSA Wrecking &amp; Demolition Works LLC">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <a class="btn" href="/">Back to the home page</a>
      <ul>${navLinks.map(([id, label]) => `<li><a href="${PAGE_PATHS[id]}">${label}</a></li>`).join('')}</ul>
    </main>
  </body>
</html>
`
);

const priority: Record<string, [string, string]> = {
  home: ['1.0', 'weekly'],
  about: ['0.8', 'monthly'],
  contact: ['0.8', 'monthly'],
  'building-demolition': ['0.9', 'weekly'],
  'industrial-demolition': ['0.9', 'weekly'],
  'interior-stripout': ['0.8', 'monthly'],
  'infrastructure-demolition': ['0.8', 'monthly']
};

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGE_PATHS)
  .map(
    (id) =>
      `  <url>\n    <loc>${origin}${PAGE_PATHS[id]}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${priority[id][1]}</changefreq>\n    <priority>${priority[id][0]}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`
);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

console.log(
  `prerender: ${Object.keys(PAGE_PATHS).length} pages, 404.html, sitemap.xml and robots.txt written for ${origin}`
);

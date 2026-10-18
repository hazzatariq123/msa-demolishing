// Post-build step: writes sitemap.xml and robots.txt into dist/ and points canonical / social / structured-data
// URLs at the real site address. Set SITE_URL (or APP_URL) to a custom domain; on Vercel the production
// domain is picked up automatically.
import { readFileSync, writeFileSync } from 'node:fs';

const OLD_ORIGIN = 'https://ais-dev-4ria3ffxyzwmxx7dcoyb5j-803648951003.asia-southeast1.run.app';

const raw =
  process.env.SITE_URL ||
  process.env.APP_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`);

if (!raw) {
  console.log('seo-files: no SITE_URL set, skipping (local build).');
  process.exit(0);
}

const origin = raw.replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);

const pages = [
  ['/', '1.0', 'weekly'],
  ['/#about', '0.9', 'monthly'],
  ['/#contact', '0.8', 'monthly'],
  ['/#building-demolition', '0.9', 'weekly'],
  ['/#industrial-demolition', '0.9', 'weekly'],
  ['/#interior-stripout', '0.8', 'monthly'],
  ['/#infrastructure-demolition', '0.8', 'monthly']
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ([loc, priority, changefreq]) =>
      `  <url>\n    <loc>${origin}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync('dist/sitemap.xml', sitemap);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

const html = readFileSync('dist/index.html', 'utf8');
writeFileSync('dist/index.html', html.split(OLD_ORIGIN).join(origin));

console.log(`seo-files: sitemap.xml, robots.txt and canonical URLs written for ${origin}`);

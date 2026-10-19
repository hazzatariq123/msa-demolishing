# MSA Wrecking & Demolition Works LLC: website

React 19 + Vite + Tailwind CSS 4 front end, served by a small Express server (compression, caching,
sitemap, robots.txt and form API routes).

## Requirements

- Node.js 20 or newer

## Scripts

| Command          | What it does                                           |
| ---------------- | ------------------------------------------------------ |
| `npm install`    | Install dependencies                                   |
| `npm run dev`    | Dev server with hot reload on http://localhost:3000    |
| `npm run build`  | Production build into `dist/`                          |
| `npm start`      | Serve the production build (run `npm run build` first) |
| `npm run lint`   | Type-check with TypeScript (strict)                    |
| `npm run format` | Format the code with Prettier                          |

## Configuration

Copy `.env.example` to `.env` and set:

- `PORT`: port to listen on (default `3000`)
- `SITE_URL`: public site URL used for canonical links, sitemap and structured data at build time (default `https://www.msademolition.com`)

## Project layout

- `src/components/`: pages and sections (pages and below-the-fold sections are lazy-loaded)
- `src/data/contact.ts`: phone, WhatsApp number, email and address (single source of truth)
- `src/data/servicesData.ts`, `portfolioData.ts`: service pages and portfolio content
- `src/data/heroShells.ts`: hero copy shared by the React pages and the static first-paint shell
- `src/utils/whatsapp.ts`: sends form details to WhatsApp
- `public/images/`: WebP images in three widths (`-640`, `-828`, full 1280)
- `vite.config.ts`: build config, including the plugin that defers the app bundle until the static hero has painted
- `scripts/prerender.ts`: runs after `vite build` and writes one complete HTML file per page (`/`, `/about`, `/contact` and the service pages) plus `404.html`, `sitemap.xml` and `robots.txt`
- `scripts/seo-audit.py`: checks the built site (titles, descriptions, H1, canonical URLs, links, alt text, JSON-LD)
- `scripts/optimize-images.py`: regenerates the WebP image set from the original JPEGs
- `src/data/routes.ts`: page id to URL path map (pages use real URLs such as `/about`, not `#` addresses)

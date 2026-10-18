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
- `APP_URL`: public site URL, used for canonical links and the sitemap

## Project layout

- `src/components/`: pages and sections (pages and below-the-fold sections are lazy-loaded)
- `src/data/contact.ts`: phone, WhatsApp number, email and address (single source of truth)
- `src/data/servicesData.ts`, `portfolioData.ts`: service pages and portfolio content
- `src/data/heroShells.ts`: hero copy shared by the React pages and the static first-paint shell
- `src/utils/whatsapp.ts`: sends form details to WhatsApp
- `public/images/`: WebP images in three widths (`-640`, `-828`, full 1280)
- `vite.config.ts`: build config, including the plugin that injects the static hero and defers the app bundle

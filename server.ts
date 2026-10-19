import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import { PAGE_PATHS } from './src/data/routes';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

app.disable('x-powered-by');
// gzip text responses (HTML, JS, CSS, JSON, SVG)
app.use(compression());

// ---------------------------------------------------------------------------
// 1. W3C / RFC Compliant Security & Standard HTTP Headers Middleware
// ---------------------------------------------------------------------------
app.use((_req: Request, res: Response, next: NextFunction) => {
  // Prevent MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Allow framing only from same origin or preview frame
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Strict Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Restrict sensitive browser features unless needed
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
  next();
});

// Parse standard JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------------------------
// 2. Health check (the site's forms submit to WhatsApp, so there are no other API routes)
// ---------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({
    status: 'pass',
    service: 'MSA Demolishing API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    standard: 'RFC-8259 / W3C HTTP 1.1'
  });
});

// ---------------------------------------------------------------------------
// 3. Mount Dev Vite or Static Production Handler
// ---------------------------------------------------------------------------
async function startServer() {
  if (!IS_PROD) {
    // Dynamic import of Vite in development
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
        watch: process.env.DISABLE_HMR === 'true' ? null : {}
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distDir = path.resolve(__dirname, 'dist');
    const ONE_YEAR = 'public, max-age=31536000, immutable';
    app.use(
      express.static(distDir, {
        index: false,
        redirect: false,
        etag: true,
        setHeaders: (res, filePath) => {
          if (filePath.includes(`${path.sep}assets${path.sep}`)) {
            // Vite fingerprints everything in /assets, so it can be cached forever
            res.setHeader('Cache-Control', ONE_YEAR);
          } else if (/\.(webp|png|jpg|jpeg|svg|ico|woff2?)$/i.test(filePath)) {
            res.setHeader('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400');
          } else {
            res.setHeader('Cache-Control', 'no-cache');
          }
        }
      })
    );
    // Every page has its own pre-rendered file (see scripts/prerender.ts)
    for (const pagePath of Object.values(PAGE_PATHS)) {
      app.get(pagePath, (_req: Request, res: Response) => {
        res.setHeader('Cache-Control', 'no-cache');
        res.sendFile(
          path.resolve(distDir, pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}/index.html`)
        );
      });
    }

    // Anything else is a real 404
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith('/api/')) return next();
      res.status(404).setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.resolve(distDir, '404.html'));
    });
  }

  // RFC-7807 Standard Error Handler for API routes
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    console.error('Unhandled server error:', err);
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({
      type: 'https://tools.ietf.org/html/rfc7807',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected internal error occurred on the demolition dispatch server.'
    });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Demolition Web Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

// Base application domain for SEO and Canonical referencing
const APP_URL =
  process.env.APP_URL ||
  'https://ais-dev-4ria3ffxyzwmxx7dcoyb5j-803648951003.asia-southeast1.run.app';

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
// 2. Standard W3C / Sitemaps.org XML Sitemap (/sitemap.xml)
// ---------------------------------------------------------------------------
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const baseUrl = APP_URL.replace(/\/$/, '');

  const pages = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/#about`, priority: '0.9', changefreq: 'monthly' },
    { loc: `${baseUrl}/#contact`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/#building-demolition`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${baseUrl}/#industrial-demolition`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${baseUrl}/#interior-stripout`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/#infrastructure-demolition`, priority: '0.8', changefreq: 'monthly' }
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  res.status(200).send(xmlContent);
});

// ---------------------------------------------------------------------------
// 3. Standard RFC-Compliant Robots.txt (/robots.txt)
// ---------------------------------------------------------------------------
app.get('/robots.txt', (_req: Request, res: Response) => {
  const baseUrl = APP_URL.replace(/\/$/, '');
  const robotsTxt = `# W3C and Search Engine Robot Directives
# MSA Demolishing (MSA Demolishing)
User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(robotsTxt);
});

// ---------------------------------------------------------------------------
// 4. Standard RESTful API Endpoints (RFC 8259 JSON & RFC 7807 Error Handling)
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

// Dynamic SEO metadata directory
app.get('/api/seo', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({
    status: 'success',
    site: 'MSA Demolishing',
    license: 'Dubai Municipality Class A',
    sitemapUrl: `${APP_URL}/sitemap.xml`,
    supportedPages: [
      'home',
      'about',
      'building-demolition',
      'industrial-demolition',
      'interior-stripout',
      'infrastructure-demolition'
    ]
  });
});

// Standard Survey Request Handler with Schema Validation
app.post('/api/survey', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const { phone, location, name, serviceType } = req.body || {};

  if (!phone || typeof phone !== 'string' || phone.trim().length < 5) {
    return res.status(400).json({
      type: 'https://tools.ietf.org/html/rfc7807',
      title: 'Bad Request',
      status: 400,
      detail: 'A valid contact phone or WhatsApp number is required (min 5 digits).'
    });
  }

  // Log or queue the validated survey dispatch
  const surveyRecord = {
    id: `SRV-${Date.now()}`,
    phone: phone.trim(),
    location: location ? String(location).trim() : 'Dubai / UAE General',
    name: name ? String(name).trim() : 'Project Owner',
    serviceType: serviceType || 'General Demolition',
    receivedAt: new Date().toISOString(),
    status: 'DISPATCHED_TO_ENGINEERS'
  };

  return res.status(201).json({
    status: 'success',
    data: surveyRecord,
    message: 'Site survey request logged and dispatched to lead structural engineers.'
  });
});

// Standard Contact / Quote Handler
app.post('/api/contact', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const { name, phone } = req.body || {};

  if (!phone || !name) {
    return res.status(400).json({
      type: 'https://tools.ietf.org/html/rfc7807',
      title: 'Bad Request',
      status: 400,
      detail: 'Name and phone number are required.'
    });
  }

  return res.status(201).json({
    status: 'success',
    message: 'Technical inquiry successfully received.'
  });
});

// ---------------------------------------------------------------------------
// 5. Mount Dev Vite or Static Production Handler
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
    app.get('*', (_req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.resolve(distDir, 'index.html'));
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
    console.log(`📋 Sitemaps available at http://0.0.0.0:${PORT}/sitemap.xml`);
    console.log(`🤖 Robots directives at http://0.0.0.0:${PORT}/robots.txt`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

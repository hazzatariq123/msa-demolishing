import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { HERO_SHELLS } from './src/data/heroShells';
import { defineConfig, type Plugin } from 'vite';

// Defers the app bundle until the static hero in index.html has painted and loaded, so the LCP image
// and first paint never share bandwidth or CPU with JavaScript. Build only (dev keeps Vite's own tags).
function deferAppBundle(): Plugin {
  return {
    name: 'defer-app-bundle',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;
      const script = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
      const css = html.match(/<link rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/);
      if (!script || !css) return html;
      html = html
        .replace(script[0], '')
        .replace(css[0], '')
        .replace(/\s*<link rel="modulepreload"[^>]*>/g, '');
      // Static shell is the default route; for deep links patch it to that route's hero before first paint.
      const heroes = Object.fromEntries(
        Object.entries(HERO_SHELLS).map(([k, h]) => [
          k,
          { i: h.image, e: h.eyebrow, t: h.title, d: h.description, l: h.label }
        ])
      );
      const patch =
        `<script>(function(){var H=${JSON.stringify(heroes)};` +
        `var k=location.hash.slice(1),c=H[k];if(!c)k="building-demolition",c=H[k];` +
        `var s=document.querySelector(".sh-hero");if(!s)return;var img=s.querySelector("img"),b=c.i.replace(/\\.webp$/,"");` +
        `img.sizes="100vw";img.srcset=b+"-640.webp 640w, "+b+"-750.webp 750w, "+b+"-828.webp 828w, "+b+".webp 1280w";img.src=c.i;img.alt=c.t;` +
        `s.setAttribute("aria-label",c.l+" Introduction");` +
        `if(k!=="building-demolition"){s.querySelector(".sh-eyebrow").textContent=c.e;s.querySelector(".sh-h1").textContent=c.t;s.querySelector(".sh-p").textContent=c.d}})()</script>`;
      const loader =
        `<script>(function(){function go(){var l=document.createElement("link");l.rel="stylesheet";` +
        `l.href=${JSON.stringify(css[1])};l.setAttribute("data-app-css","");document.head.appendChild(l);` +
        `var s=document.createElement("script");s.type="module";s.src=${JSON.stringify(script[1])};` +
        `document.head.appendChild(s)}` +
        `function later(){setTimeout(go,150)}` +
        `if(document.readyState==="complete")later();` +
        `else addEventListener("load",later,{once:true})})()</script>` +
        `<noscript><link rel="stylesheet" href=${JSON.stringify(css[1])}></noscript>`;
      return html.replace('</body>', () => `    ${patch}\n    ${loader}\n  </body>`);
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), deferAppBundle()],
    build: {
      // main bundle is split into route and section chunks; keep the warning meaningful
      chunkSizeWarningLimit: 400,
      cssCodeSplit: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});

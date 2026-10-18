import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// index.html paints a static hero first and only then injects this bundle and its stylesheet
// (see deferAppBundle in vite.config.ts). Wait for the stylesheet so React never renders unstyled.
const render = () => createRoot(document.getElementById('root')!).render(<App />);

const css = document.querySelector<HTMLLinkElement>('link[data-app-css]');
if (!css || css.sheet) {
  render();
} else {
  let done = false;
  const go = () => {
    if (!done) {
      done = true;
      render();
    }
  };
  css.addEventListener('load', go, { once: true });
  css.addEventListener('error', go, { once: true });
  window.setTimeout(go, 3000);
}

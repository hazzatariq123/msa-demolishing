/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { LazyMotion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import { ALL_SERVICES_DATA } from './data/servicesData';
import { pageFromLegacyHash, pageFromPath, pageHref } from './data/routes';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { applyPageSEO } from './utils/seo';

const HomePage = lazy(() => import('./components/HomePage').then((m) => ({ default: m.HomePage })));
const ContactPage = lazy(() =>
  import('./components/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const AboutPage = lazy(() =>
  import('./components/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const loadMotionFeatures = () => import('./motionFeatures').then((m) => m.default);

const currentPage = (): string => {
  if (typeof window === 'undefined') return 'home';
  // Old links used /#about style addresses: map them to the real page.
  const legacy = pageFromLegacyHash(window.location.hash);
  if (legacy && window.location.pathname === '/') {
    window.history.replaceState(null, '', pageHref(legacy));
    return legacy;
  }
  return pageFromPath(window.location.pathname) ?? 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState<string>(currentPage);

  // Keep title, meta tags, canonical link and page schema in step with the page shown
  useEffect(() => {
    applyPageSEO(activePage);
  }, [activePage]);

  // Browser back/forward buttons
  useEffect(() => {
    const onPopState = () => setActivePage(pageFromPath(window.location.pathname) ?? 'home');
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (pageId: string) => {
    if (pageHref(pageId) !== window.location.pathname) {
      window.history.pushState(null, '', pageHref(pageId));
    }
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    if (activePage === 'home') {
      return <HomePage onNavigatePage={handleNavigate} />;
    }

    if (activePage === 'contact') {
      return <ContactPage />;
    }

    if (activePage === 'about') {
      return <AboutPage onNavigatePage={handleNavigate} />;
    }

    const serviceData = ALL_SERVICES_DATA[activePage] || ALL_SERVICES_DATA['building-demolition'];
    return <ServiceLandingPage data={serviceData} />;
  };

  return (
    <LazyMotion features={loadMotionFeatures}>
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
        {/* W3C WCAG Accessible Skip Link for Keyboard / Screen Reader Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-amber-500 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
        >
          Skip to main content
        </a>

        {/* Top Header with Building Demolition as Main Menu Item */}
        <Navbar activePage={activePage} onNavigatePage={handleNavigate} />

        {/* The page, contact block and footer share one Suspense boundary, so a lazily loaded page never
          renders with the footer sitting right under a placeholder and then jumping thousands of pixels. */}
        <Suspense
          fallback={
            <main id="main-content" tabIndex={-1} className="flex-grow pt-16 sm:pt-20">
              <div aria-hidden="true" className="w-full min-h-screen bg-white" />
            </main>
          }
        >
          {/* W3C Semantic Main Landmark */}
          <main
            id="main-content"
            tabIndex={-1}
            className="flex-grow pt-16 sm:pt-20 focus:outline-none"
          >
            {renderCurrentPage()}
          </main>

          {/* Clean Minimalist White Footer */}
          <Footer onNavigatePage={handleNavigate} />
        </Suspense>

        {/* Sticky WhatsApp + call buttons (mobile only) */}
        <FloatingContact />
      </div>
    </LazyMotion>
  );
}

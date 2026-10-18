/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { LazyMotion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ServiceLandingPage } from './components/ServiceLandingPage';
import { ALL_SERVICES_DATA } from './data/servicesData';
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

export default function App() {
  // Support hash routing or internal state
  const [activePage, setActivePage] = useState<string>(() => {
    if (typeof window === 'undefined') return 'building-demolition';
    const hash = window.location.hash.replace('#', '');
    if (
      hash &&
      (hash === 'home' || hash === 'about' || hash === 'contact' || ALL_SERVICES_DATA[hash])
    ) {
      return hash;
    }
    return 'building-demolition'; // Featured primary demolition view
  });

  // Apply on-page SEO metadata whenever the active page changes
  useEffect(() => {
    applyPageSEO(activePage);
  }, [activePage]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash &&
        (hash === 'home' || hash === 'about' || hash === 'contact' || ALL_SERVICES_DATA[hash])
      ) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId;
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

import React from 'react';
import { PageLink } from './PageLink';

interface FooterProps {
  onNavigatePage?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePageClick = (pageId: string) => {
    if (onNavigatePage) {
      onNavigatePage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-white border-t border-neutral-200/90 text-neutral-600 overflow-hidden select-none"
    >
      {/* Main Clean UI/UX Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-28 sm:pb-12">
        {/* Top Grid: Simple, high-clarity UX layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-16 border-b border-neutral-200/70">
          {/* Brand & Mission (Columns 1-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <PageLink
                  to="home"
                  onNavigate={handlePageClick}
                  aria-label="MSA Wrecking &amp; Demolition Works LLC - Return to Homepage"
                  className="block hover:opacity-85 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/msa-demolition-logo-300.webp"
                    alt="MSA Wrecking &amp; Demolition Works LLC"
                    width={300}
                    height={114}
                    className="h-16 sm:h-20 w-auto"
                  />
                </PageLink>
              </div>
              <p className="text-sm text-neutral-600 max-w-md leading-relaxed font-normal mb-5">
                Class A licensed structural deconstruction and engineered demolition contractor
                operating across Dubai and the United Arab Emirates. Engineered safety, zero
                vibration collateral, and 100% statutory clearance.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                ></span>
                <span className="font-medium text-neutral-700">
                  Licensed Class A Contractor · Dubai Municipality
                </span>
              </div>
              <div>DM Permit No. #DM-DEM-88219 · Trakhees &amp; DDA Certified</div>
            </div>
          </div>

          {/* Quick Navigation (Columns 6-7) */}
          <nav aria-label="Footer Quick Navigation" className="md:col-span-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <PageLink
                  to="home"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Home
                </PageLink>
              </li>
              <li>
                <PageLink
                  to="about"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  About Us
                </PageLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('before-you-start')}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Pre-Demolition Audit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('engineering-overview')}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Technical Overview
                </button>
              </li>
              <li>
                <PageLink
                  to="contact"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-neutral-600 text-left cursor-pointer"
                >
                  Contact Us
                </PageLink>
              </li>
            </ul>
          </nav>

          {/* Core Services Pages (Columns 8-9) */}
          <nav aria-label="Footer Services Navigation" className="md:col-span-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 mb-4">
              Individual Services
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <li>
                <PageLink
                  to="building-demolition"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-left font-medium text-amber-800 cursor-pointer"
                >
                  Building Demolition
                </PageLink>
              </li>
              <li>
                <PageLink
                  to="industrial-demolition"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Industrial Demolition
                </PageLink>
              </li>
              <li>
                <PageLink
                  to="interior-stripout"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Interior Strip-Out
                </PageLink>
              </li>
              <li>
                <PageLink
                  to="infrastructure-demolition"
                  onNavigate={handlePageClick}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Infrastructure Demolition
                </PageLink>
              </li>
            </ul>
          </nav>

          {/* Contact lives on its own page */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 mb-4">
              Get in Touch
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              Need a site survey or a demolition quote? Speak to our engineers.
            </p>
            <PageLink
              to="contact"
              onNavigate={handlePageClick}
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-400 text-white px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer"
            >
              Contact Us
            </PageLink>
          </div>
        </div>

        {/* Bottom Bar: Clean copyright and compliance markers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} MSA Demolishing LLC. All rights reserved. Registered
            in Dubai, UAE.
          </div>
        </div>
      </div>
    </footer>
  );
};

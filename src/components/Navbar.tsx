import React, { useState } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Menu } from 'lucide-react';
import { sendToWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  activePage: string;
  onNavigatePage: (pageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigatePage }) => {
  const [isSurveyOpen, setIsSurveyOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState({ name: '', phone: '', location: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    sendToWhatsApp('Site Survey Request', {
      Name: form.name,
      Phone: form.phone,
      Location: form.location,
      Page: activePage
    });

    setIsSubmitting(true);
    try {
      // Dispatch to standardized backend API
      await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          location: form.location,
          serviceType: activePage
        })
      });
    } catch (err) {
      console.warn('API submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'building-demolition', label: 'Building Demolition', isPrimaryFeatured: true },
    { id: 'industrial-demolition', label: 'Industrial Demolition' },
    { id: 'interior-stripout', label: 'Interior Strip-Out' },
    { id: 'infrastructure-demolition', label: 'Infrastructure' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    onNavigatePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* Left: Minimal Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="MSA Wrecking &amp; Demolition Works LLC - Return to Homepage"
            className="flex items-center cursor-pointer hover:opacity-85 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <img
              src="/images/MSA-logo-300.webp"
              alt="MSA Wrecking &amp; Demolition Works LLC"
              width={300}
              height={114}
              className="h-11 sm:h-14 w-auto"
            />
          </button>

          {/* Center/Right Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-medium transition-all rounded-lg cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isActive
                      ? 'text-neutral-950 font-semibold bg-neutral-100'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                  } ${item.isPrimaryFeatured && !isActive ? 'text-amber-800 bg-amber-50/60 font-medium' : ''}`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSurveyOpen(true)}
              className="rounded-full bg-amber-500 hover:bg-amber-400 text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all whitespace-nowrap shadow-sm hover:shadow active:scale-98 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Request Survey
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              role="region"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-neutral-100 bg-white px-6 py-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-amber-50 text-neutral-950 font-bold border-l-4 border-amber-500'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.isPrimaryFeatured && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500 text-white font-bold">
                          Primary
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Quick Survey Request Dialog */}
      <AnimatePresence>
        {isSurveyOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm"
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="navbar-survey-title"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100 text-left"
            >
              <button
                type="button"
                onClick={() => {
                  setIsSurveyOpen(false);
                  setSubmitted(false);
                }}
                aria-label="Close survey dialog"
                className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {!submitted ? (
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold block mb-2">
                    Class A Technical Dispatch
                  </span>
                  <h3
                    id="navbar-survey-title"
                    className="text-2xl font-serif font-medium text-neutral-950 mb-2"
                  >
                    Request Site Survey
                  </h3>
                  <p className="text-sm text-neutral-600 font-light mb-6">
                    Direct engineering evaluation across Dubai and UAE emirates within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="navbar-survey-name"
                        className="block text-xs font-mono uppercase text-neutral-600 mb-1"
                      >
                        Full Name / Organization{' '}
                        <span className="text-amber-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="navbar-survey-name"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        placeholder="e.g. Al Futtaim Group / Project Manager"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="navbar-survey-phone"
                        className="block text-xs font-mono uppercase text-neutral-600 mb-1"
                      >
                        Phone / WhatsApp{' '}
                        <span className="text-amber-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="navbar-survey-phone"
                        type="tel"
                        required
                        aria-required="true"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        placeholder="+971 50 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="navbar-survey-location"
                        className="block text-xs font-mono uppercase text-neutral-600 mb-1"
                      >
                        Site Location / District
                      </label>
                      <input
                        id="navbar-survey-location"
                        type="text"
                        autoComplete="street-address"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        placeholder="e.g. Business Bay, JAFZA, Abu Dhabi"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Dispatching...' : 'Dispatch Technical Lead'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-serif font-medium text-neutral-950 mb-2">
                    Survey Request Dispatched
                  </h4>
                  <p className="text-sm text-neutral-600 font-light mb-6 max-w-xs mx-auto">
                    Your request has been routed to our senior demolition engineers. We will contact
                    you to verify site access.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSurveyOpen(false);
                      setSubmitted(false);
                      setForm({ name: '', phone: '', location: '' });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

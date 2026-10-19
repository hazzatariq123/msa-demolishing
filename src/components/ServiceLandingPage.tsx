import React, { useState, lazy, Suspense } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { ServicePageData, SubServiceItem } from '../data/servicesData';
import { SectionFallback } from './SectionFallback';
import { srcSetFor, CARD_SIZES } from '../utils/img';
import { sendToWhatsApp } from '../utils/whatsapp';
import { FaqSection } from './FaqSection';
import { RelatedServices } from './RelatedServices';

const HomeEnquirySection = lazy(() =>
  import('./HomeEnquirySection').then((m) => ({ default: m.HomeEnquirySection }))
);
const WhatYouGetBeforeYouStart = lazy(() =>
  import('./WhatYouGetBeforeYouStart').then((m) => ({ default: m.WhatYouGetBeforeYouStart }))
);
const WhyChooseUs = lazy(() => import('./WhyChooseUs').then((m) => ({ default: m.WhyChooseUs })));
const PortfolioSlider = lazy(() =>
  import('./PortfolioSlider').then((m) => ({ default: m.PortfolioSlider }))
);

interface ServiceLandingPageProps {
  data: ServicePageData;
  onNavigatePage: (pageId: string) => void;
}

const SERVICE_FORM_LABELS: Record<string, string> = {
  'building-demolition': 'Building Demolition',
  'industrial-demolition': 'Industrial Demolition',
  'interior-stripout': 'Interior Demolition',
  'infrastructure-demolition': 'Infrastructure Demolition'
};

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ data, onNavigatePage }) => {
  // Modal states for Hero Survey
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState<boolean>(false);
  const [surveySubmitted, setSurveySubmitted] = useState<boolean>(false);
  const [surveyPhone, setSurveyPhone] = useState<string>('');
  const [surveyLocation, setSurveyLocation] = useState<string>('');

  // Modal states for Sub-Service click
  const [selectedSubService, setSelectedSubService] = useState<SubServiceItem | null>(null);
  const [subInquirySent, setSubInquirySent] = useState<boolean>(false);
  const [subPhone, setSubPhone] = useState<string>('');
  const [subLocation, setSubLocation] = useState<string>('');

  const handleHeroSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyPhone.trim()) return;

    sendToWhatsApp('Site Survey Request', {
      Service: data.navTitle,
      Phone: surveyPhone,
      Location: surveyLocation
    });

    setSurveySubmitted(true);
  };

  const handleSubInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subPhone.trim()) return;

    sendToWhatsApp('Service Booking', {
      Service: `${data.navTitle} - ${selectedSubService?.title || ''}`,
      Phone: subPhone,
      Location: subLocation
    });

    setSubInquirySent(true);
  };

  return (
    <div className="w-full">
      {/* 1. Dedicated Image-Based Hero Banner (Minimalist text, 1 yellow button) */}
      <section
        aria-label={`${data.navTitle} Introduction`}
        className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-neutral-950 text-white select-none"
      >
        {/* Full-bleed crisp background image with subtle light scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            srcSet={`${data.heroImage.replace('.webp', '-640.webp')} 640w, ${data.heroImage.replace('.webp', '-750.webp')} 750w, ${data.heroImage.replace('.webp', '-828.webp')} 828w, ${data.heroImage} 1280w`}
            sizes="100vw"
            width={1280}
            height={714}
            decoding="async"
            alt={`${data.heroTitle} - Class A Demolition in UAE`}
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          {/* Lightened, balanced gradient scrim so image is vivid & text is sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/55 via-neutral-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 w-full">
          <div className="relative max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 -inset-y-8 sm:-inset-x-10 sm:-inset-y-12 -z-10 pointer-events-none backdrop-blur-[3px] bg-neutral-950/10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]"
            />
            {/* Eyebrow */}
            <motion.div className="inline-flex items-center gap-2 mb-4">
              <span
                className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-300 font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_12px_rgba(0,0,0,0.8)]">
                {data.heroEyebrow}
              </span>
            </motion.div>

            {/* Minimal Text Heading (Single H1 on this landing page) */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1] [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
              {data.heroTitle}
            </motion.h1>

            {/* Concise 2-3 Lines Content */}
            <motion.p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed max-w-2xl mb-9 [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.85)]">
              {data.heroDescription}
            </motion.p>

            {/* Exactly 1 Yellow Button */}
            <motion.div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => {
                  setSurveySubmitted(false);
                  setIsSurveyModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-lg shadow-black/30 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Request Site Survey</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Survey Request Modal */}
        <AnimatePresence>
          {isSurveyModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm"
              role="presentation"
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-survey-title"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                className="relative z-10 w-full max-w-lg bg-white text-neutral-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[92dvh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setIsSurveyModalOpen(false)}
                  aria-label="Close site survey modal"
                  className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>

                {!surveySubmitted ? (
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold mb-2">
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                      Class A Site Survey // UAE
                    </div>
                    <h2
                      id="service-survey-title"
                      className="text-2xl font-serif font-medium text-neutral-950 mb-2"
                    >
                      Request Structural Site Survey
                    </h2>
                    <p className="text-sm text-neutral-600 font-light mb-6">
                      For {data.navTitle}. An engineering specialist will review your coordinates,
                      review access feasibility, and schedule an on-site inspection within 24 hours.
                    </p>

                    <form onSubmit={handleHeroSurveySubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="service-survey-location"
                          className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5"
                        >
                          Site Location (Emirate / District){' '}
                          <span className="text-amber-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <MapPin
                            className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                            aria-hidden="true"
                          />
                          <input
                            id="service-survey-location"
                            type="text"
                            required
                            aria-required="true"
                            autoComplete="street-address"
                            placeholder="e.g. Downtown Dubai, JAFZA, Abu Dhabi"
                            value={surveyLocation}
                            onChange={(e) => setSurveyLocation(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service-survey-phone"
                          className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5"
                        >
                          Contact Phone / WhatsApp{' '}
                          <span className="text-amber-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <Phone
                            className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5"
                            aria-hidden="true"
                          />
                          <input
                            id="service-survey-phone"
                            type="tel"
                            required
                            aria-required="true"
                            autoComplete="tel"
                            placeholder="+971 50 000 0000"
                            value={surveyPhone}
                            onChange={(e) => setSurveyPhone(e.target.value)}
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                      >
                        {'Dispatch Engineering Survey Team'}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-serif font-medium text-neutral-950 mb-2">
                      Survey Request Confirmed
                    </h2>
                    <p className="text-sm text-neutral-600 font-light max-w-sm mx-auto mb-6">
                      Our lead technical team has logged your site coordinates. A representative
                      will contact you shortly to confirm gate access and inspection time.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSurveyModalOpen(false);
                        setSurveySubmitted(false);
                        setSurveyPhone('');
                        setSurveyLocation('');
                      }}
                      className="px-6 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Return to Page
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 2. Core Sub-Services Section (8 Minimalist Image-Based Cards) */}
      <section
        id="services"
        aria-labelledby="sub-services-heading"
        className="relative w-full py-20 sm:py-28 bg-[#FAF9F5] border-t border-neutral-200/80 text-neutral-900 select-none"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Heading and Text */}
          <div className="max-w-2xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold block mb-3">
              {data.sectionSubtitle}
            </span>
            <h2
              id="sub-services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-neutral-950 mb-4"
            >
              {data.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              {data.sectionDescription}
            </p>
          </div>

          {/* Minimalist Image-Based Sub-Services Cards */}
          <div className="carousel-m grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {data.subServices.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                onClick={() => {
                  setSelectedSubService(service);
                  setSubInquirySent(false);
                }}
                className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-500"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    width={1280}
                    height={800}
                    src={service.image}
                    srcSet={srcSetFor(service.image)}
                    sizes={CARD_SIZES}
                    alt={`${service.title} - ${data.navTitle} Dubai UAE`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-neutral-950/10 group-hover:bg-transparent transition-colors duration-300" />

                  {/* Subtle Hover Action Indicator */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-neutral-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-neutral-900" aria-hidden="true" />
                  </div>
                </div>

                {/* Minimalist Card Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif font-medium text-lg text-neutral-950 mb-1.5 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100">
                    {/* Clicks bubble to the card, which opens the booking pop-up */}
                    <button
                      type="button"
                      aria-label={`Book ${service.title}`}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      Book Service
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sub-Service Scope Modal */}
        <AnimatePresence>
          {selectedSubService && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm"
              role="presentation"
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="sub-service-scope-title"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left max-h-[92dvh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedSubService(null)}
                  aria-label="Close sub-service modal"
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-neutral-900 shadow-md hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>

                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-5 bg-neutral-100">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                    src={selectedSubService.image}
                    srcSet={srcSetFor(selectedSubService.image)}
                    sizes={CARD_SIZES}
                    alt={`${selectedSubService.title} - Scope specifications`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {!subInquirySent ? (
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-semibold block mb-1">
                      MSA Demolishing · Sub-Service
                    </span>
                    <h3
                      id="sub-service-scope-title"
                      className="text-2xl font-serif font-medium text-neutral-950 mb-2"
                    >
                      {selectedSubService.title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-light mb-6">
                      {selectedSubService.scopeDescription}
                    </p>

                    <form onSubmit={handleSubInquirySubmit} className="space-y-3.5">
                      <div>
                        <label
                          htmlFor="sub-service-location"
                          className="block text-xs font-mono uppercase text-neutral-500 mb-1"
                        >
                          Site Location in UAE{' '}
                          <span className="text-amber-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <MapPin
                            className="w-4 h-4 text-neutral-400 absolute left-3 top-3"
                            aria-hidden="true"
                          />
                          <input
                            id="sub-service-location"
                            type="text"
                            required
                            aria-required="true"
                            autoComplete="street-address"
                            value={subLocation}
                            onChange={(e) => setSubLocation(e.target.value)}
                            placeholder="e.g. Dubai Marina, JAFZA, Abu Dhabi"
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="sub-service-phone"
                          className="block text-xs font-mono uppercase text-neutral-500 mb-1"
                        >
                          Contact Phone / WhatsApp{' '}
                          <span className="text-amber-600" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <div className="relative">
                          <Phone
                            className="w-4 h-4 text-neutral-400 absolute left-3 top-3"
                            aria-hidden="true"
                          />
                          <input
                            id="sub-service-phone"
                            type="tel"
                            required
                            aria-required="true"
                            autoComplete="tel"
                            value={subPhone}
                            onChange={(e) => setSubPhone(e.target.value)}
                            placeholder="+971 50 000 0000"
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-9 pr-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-sm cursor-pointer"
                      >
                        {`Book ${selectedSubService.title}`}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-neutral-950 mb-2">
                      Booking Request Ready
                    </h3>
                    <p className="text-sm text-neutral-600 font-light mb-5 max-w-xs mx-auto">
                      WhatsApp has opened with your booking details. Press send and our lead
                      engineer for {data.navTitle} will contact you promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSubService(null);
                        setSubInquirySent(false);
                        setSubPhone('');
                        setSubLocation('');
                      }}
                      className="px-5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <Suspense fallback={<SectionFallback />}>
        {/* 2b. Quote enquiry band: details are sent to WhatsApp */}
        <HomeEnquirySection defaultService={SERVICE_FORM_LABELS[data.id]} />

        {/* 3. What You Get Before You Start (Consistent 3-Card Process Across All Pages) */}
        <WhatYouGetBeforeYouStart
          onOpenSurvey={() => {
            setSurveySubmitted(false);
            setIsSurveyModalOpen(true);
          }}
        />

        {/* 4. Why Choose Us as a Trusted Demolition Contractor in UAE */}
        <WhyChooseUs />

        {/* 5. Project Portfolio Grid (Page-Specific Relevant Portfolio) */}
        <PortfolioSlider serviceId={data.id} />
      </Suspense>

      {/* 6. Simple Straightforward Text-Based Section */}
      <section
        id="engineering-overview"
        aria-labelledby="technical-assurance-heading"
        className="relative w-full py-20 sm:py-28 bg-[#FAF9F5] border-t border-neutral-200/80 text-neutral-900 select-none [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold block mb-3">
                TECHNICAL ASSURANCE // UAE STANDARDS
              </span>
              <h2
                id="technical-assurance-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-neutral-950 leading-tight"
              >
                {data.overviewText.heading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {data.overviewText.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions customers ask (also marked up as FAQPage) */}
      <FaqSection pageId={data.id} />

      {/* Cross-links to the other service pages */}
      <RelatedServices currentId={data.id} onNavigate={onNavigatePage} />
    </div>
  );
};

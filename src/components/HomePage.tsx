import React, { useState, lazy, Suspense } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Building2,
  Factory,
  Layers,
  Construction
} from 'lucide-react';
import { SectionFallback } from './SectionFallback';
import { srcSetFor, CARD_SIZES } from '../utils/img';
import { PageLink } from './PageLink';
import { HOME_HERO } from '../data/heroShells';
import { sendToWhatsApp } from '../utils/whatsapp';

const StandardDemolitionProcess = lazy(() =>
  import('./StandardDemolitionProcess').then((m) => ({ default: m.StandardDemolitionProcess }))
);
const WhyChooseUs = lazy(() => import('./WhyChooseUs').then((m) => ({ default: m.WhyChooseUs })));
const PortfolioSlider = lazy(() =>
  import('./PortfolioSlider').then((m) => ({ default: m.PortfolioSlider }))
);
const SimpleTextSection = lazy(() =>
  import('./SimpleTextSection').then((m) => ({ default: m.SimpleTextSection }))
);
const HomeEnquirySection = lazy(() =>
  import('./HomeEnquirySection').then((m) => ({ default: m.HomeEnquirySection }))
);

interface HomePageProps {
  onNavigatePage: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigatePage }) => {
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState<boolean>(false);
  const [surveySubmitted, setSurveySubmitted] = useState<boolean>(false);
  const [surveyPhone, setSurveyPhone] = useState<string>('');
  const [surveyLocation, setSurveyLocation] = useState<string>('');

  const handleHeroSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyPhone.trim()) return;

    sendToWhatsApp('Site Survey Request', {
      Phone: surveyPhone,
      Location: surveyLocation,
      Page: 'Home'
    });

    setSurveySubmitted(true);
  };

  const PRIMARY_SECTORS = [
    {
      id: 'building-demolition',
      title: 'Building Demolition',
      subtitle: 'High-reach mechanical felling & multi-story tower teardown',
      image: '/images/hero_building_demolition_1791830585768.webp',
      imageAlt: 'High-reach excavator demolishing commercial concrete structure in Dubai',
      icon: Building2,
      metric: 'Class A Unlimited Height',
      actionText: 'Explore Building Demolition'
    },
    {
      id: 'industrial-demolition',
      title: 'Industrial Demolition',
      subtitle: 'Petrochemical refineries, processing plants, silos & heavy steel dismantling',
      image: '/images/demolition_heavy_shear_1791756033650.webp',
      imageAlt: 'Heavy hydraulic excavator shears dismantling industrial plant steel frame',
      icon: Factory,
      metric: 'Zero-Spark Cold Cutting',
      actionText: 'Explore Industrial Demolition'
    },
    {
      id: 'interior-stripout',
      title: 'Interior Strip-Out',
      subtitle: 'Architectural soft-strip, retail mall night shifts & bare-shell handover',
      image: '/images/interior_stripout_demolition_1791759731027.webp',
      imageAlt: 'Architectural interior strip-out and MEP deconstruction in commercial space',
      icon: Layers,
      metric: 'Zero Dust Migration HEPA',
      actionText: 'Explore Interior Strip-Out'
    },
    {
      id: 'infrastructure-demolition',
      title: 'Infrastructure Demolition',
      subtitle: 'Civil highway viaducts, coastal bridges, marine wharves & deep shoring',
      image: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp',
      imageAlt: 'Civil infrastructure demolition and highway bridge segment removal in UAE',
      icon: Construction,
      metric: 'Sub-Millimeter Vibration',
      actionText: 'Explore Infrastructure Demolition'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Main Home Hero Banner (Image-Based, Minimal Heading, 2-3 Lines, 1 Yellow Button) */}
      <section
        aria-label="Hero Introduction"
        className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-neutral-950 text-white select-none"
      >
        {/* Full-bleed crisp background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_building_demolition_1791830585768.webp"
            srcSet="/images/hero_building_demolition_1791830585768-640.webp 640w, /images/hero_building_demolition_1791830585768-750.webp 750w, /images/hero_building_demolition_1791830585768-828.webp 828w, /images/hero_building_demolition_1791830585768.webp 1280w"
            sizes="100vw"
            width={1280}
            height={714}
            decoding="async"
            alt="MSA Demolishing - Class A High Reach Demolition Machine in Dubai"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/55 via-neutral-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />
        </div>

        {/* Content */}
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
                {HOME_HERO.eyebrow}
              </span>
            </motion.div>

            {/* Minimal Heading (Single H1 on Homepage) */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1] [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
              {HOME_HERO.title}
            </motion.h1>

            {/* 2-3 Lines Content */}
            <motion.p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed max-w-2xl mb-9 [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.85)]">
              {HOME_HERO.description}
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
                aria-labelledby="home-survey-modal-title"
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
                      id="home-survey-modal-title"
                      className="text-2xl font-serif font-medium text-neutral-950 mb-2"
                    >
                      Request Structural Site Survey
                    </h2>
                    <p className="text-sm text-neutral-600 font-light mb-6">
                      Our certified demolition engineers evaluate site access, structural load
                      paths, and municipal clearance requirements within 24 hours.
                    </p>

                    <form onSubmit={handleHeroSurveySubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="home-survey-location"
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
                            id="home-survey-location"
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
                          htmlFor="home-survey-phone"
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
                            id="home-survey-phone"
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
                        className="w-full mt-2 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-50"
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

      {/* 2. Primary 4 Services Section on Home Page */}
      <section
        id="services"
        aria-labelledby="primary-services-heading"
        className="relative w-full py-20 sm:py-28 bg-[#FAF9F5] border-t border-neutral-200/80 text-neutral-900 select-none [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-16 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold block mb-3">
              PRIMARY DEMOLITION SECTORS // UAE
            </span>
            <h2
              id="primary-services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-neutral-950 mb-4"
            >
              Our 4 Core Demolition Services
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Explore our specialized engineering landing pages for building teardowns, heavy
              industrial dismantle, commercial interior strip-outs, and civil infrastructure.
            </p>
          </div>

          {/* 4 Large Clean Minimalist Cards Directing to Individual Pages */}
          <div className="carousel-m grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-9">
            {PRIMARY_SECTORS.map((sector, index) => (
              <motion.article
                key={sector.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-neutral-300 hover:shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-500"
              >
                <PageLink
                  to={sector.id}
                  onNavigate={onNavigatePage}
                  aria-label={`${sector.title}: ${sector.actionText}`}
                  className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-none"
                />
                {/* Visual Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    width={1280}
                    height={800}
                    src={sector.image}
                    srcSet={srcSetFor(sector.image)}
                    sizes={CARD_SIZES}
                    alt={sector.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent" />

                  {/* Corner Arrow Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-neutral-900 shadow-md group-hover:bg-amber-500 transition-colors">
                    <ArrowUpRight
                      className="w-5 h-5 text-neutral-950 group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title overlay on bottom of image for punchy presentation */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-serif font-medium text-2xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
                    {sector.subtitle}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-sm font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
                    <span>{sector.actionText}</span>
                    <ArrowRight
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionFallback />}>
        {/* 3. Quote Enquiry: orange full-width band, content left, form right */}
        <HomeEnquirySection />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Portfolio Grid (Master UAE Demolition Portfolio) */}
        <PortfolioSlider serviceId="home" />

        {/* 5. Standard Demolition Process in Signature Yellow Branding (Placed Below Portfolio) */}
        <StandardDemolitionProcess
          onOpenSurvey={() => {
            setSurveySubmitted(false);
            setIsSurveyModalOpen(true);
          }}
        />

        {/* 6. Simple Text Section */}
        <SimpleTextSection />
      </Suspense>
    </div>
  );
};

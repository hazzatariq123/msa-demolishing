import React, { useState, lazy, Suspense } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import { ABOUT_HERO } from '../data/heroShells';
import { sendToWhatsApp } from '../utils/whatsapp';
import { SectionFallback } from './SectionFallback';

const HomeEnquirySection = lazy(() =>
  import('./HomeEnquirySection').then((m) => ({ default: m.HomeEnquirySection }))
);
import {
  ShieldCheck,
  Target,
  CheckCircle2,
  ArrowRight,
  X,
  Phone,
  MapPin,
  Cpu,
  Recycle,
  FileCheck2,
  HardHat
} from 'lucide-react';

interface AboutPageProps {
  onNavigatePage: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigatePage }) => {
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState<boolean>(false);
  const [surveySubmitted, setSurveySubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [surveyPhone, setSurveyPhone] = useState<string>('');
  const [surveyLocation, setSurveyLocation] = useState<string>('');

  const handleHeroSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyPhone.trim()) return;

    sendToWhatsApp('Technical Consultation Request', {
      Phone: surveyPhone,
      Location: surveyLocation,
      Page: 'About Us'
    });

    setIsSubmitting(true);
    try {
      await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: surveyPhone.trim(),
          location: surveyLocation.trim(),
          serviceType: 'about-consultation'
        })
      });
    } catch (err) {
      console.warn('Survey submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSurveySubmitted(true);
    }
  };

  const CORE_VALUES = [
    {
      num: '01',
      title: 'Safety as Absolute Law',
      icon: ShieldCheck,
      description:
        'Zero shortcuts. Every mechanical drop and wire cut is guided by 3D engineering models and continuous seismic telemetry. Life and adjacent structural stability always supersede schedule.'
    },
    {
      num: '02',
      title: 'Precision Over Force',
      icon: Cpu,
      description:
        'We deconstruct structures through calculated load transfer, diamond wire sawing, and robotic crushing rather than uncontrolled impact, eliminating vibration risk to neighboring towers.'
    },
    {
      num: '03',
      title: 'Statutory Transparency',
      icon: FileCheck2,
      description:
        '100% compliance with Dubai Municipality Class A standards, Trakhees EHS regulations, and Dubai Civil Defense codes with full transparency and verified NOC documentation.'
    },
    {
      num: '04',
      title: 'Circular Resource Recovery',
      icon: Recycle,
      description:
        'Demolition is the foundation of future construction. We crush concrete on-site for certified sub-base aggregate and recover high-tensile steel, diverting up to 98% of material from landfills.'
    },
    {
      num: '05',
      title: 'Delivery Certainty',
      icon: Target,
      description:
        'Fixed timelines, daily progress reporting, milestone-backed commitments, and clean-pad certifications ready for immediate piling and redevelopment.'
    }
  ];

  const ACCREDITATIONS = [
    { name: 'Dubai Municipality', role: 'Class A Unlimited Demolition' },
    { name: 'Trakhees EHS', role: 'Free Zone Master Accredited' },
    { name: 'Dubai Civil Defense', role: 'Structural Safety & Hazmat Licensed' },
    { name: 'RTA Dubai', role: 'Right-of-Way & Viaduct Demolition NOC' },
    { name: 'DEWA Approved', role: 'High-Voltage Isolation Protocol' },
    { name: 'ISO 45001 / 14001', role: 'Health, Safety & Environment Certified' }
  ];

  return (
    <div className="w-full bg-white text-neutral-900 select-none">
      {/* 1. HERO BANNER: Image-based, minimal heading, 2-3 lines content, exactly 1 yellow button */}
      <section className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-neutral-950 text-white">
        {/* Full-bleed authentic engineering image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about_us_engineers_1791866089032.webp"
            srcSet="/images/about_us_engineers_1791866089032-640.webp 640w, /images/about_us_engineers_1791866089032-828.webp 828w, /images/about_us_engineers_1791866089032.webp 1280w"
            sizes="100vw"
            width={1280}
            height={714}
            fetchPriority="high"
            decoding="async"
            alt="MSA Demolishing Engineering Team Dubai"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
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
                {ABOUT_HERO.eyebrow}
              </span>
            </motion.div>

            {/* Minimal Heading (Single H1 on About page) */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1] [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
              {ABOUT_HERO.title}
            </motion.h1>

            {/* 2-3 Lines Content */}
            <motion.p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed max-w-2xl mb-9 [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.85)]">
              {ABOUT_HERO.description}
            </motion.p>

            {/* Exactly 1 Yellow Button */}
            <motion.div className="flex items-center">
              <button
                type="button"
                onClick={() => {
                  setSurveySubmitted(false);
                  setIsSurveyModalOpen(true);
                }}
                className="bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-150 shadow-md hover:shadow-lg active:scale-98 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Minimal Bottom KPI Metrics Ribbon */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-neutral-950/70 backdrop-blur-md hidden sm:block">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div>
                <div className="text-xl lg:text-2xl font-serif font-bold text-white tracking-tight">
                  18+ Years
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  UAE Operations Track Record
                </div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-serif font-bold text-white tracking-tight">
                  450+ Projects
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  Completed Controlled Demolitions
                </div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-serif font-bold text-amber-400 tracking-tight">
                  0 Incidents
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  Structural &amp; Safety Record
                </div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-serif font-bold text-white tracking-tight">
                  95%+ Circularity
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  Concrete &amp; Steel Diverted
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80 [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Eyebrow & Section Heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
                Strategic Horizon
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-neutral-950 tracking-tight leading-tight mb-5">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 font-light leading-relaxed">
              To lead the Middle East's construction lifecycle by transforming demolition from
              conventional destruction into an exact, technologically advanced science of structural
              dis-assembly and circular resource recovery.
            </p>
          </div>

          {/* Vision Three Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-950 mb-3 tracking-tight">
                  Zero-Disturbance Urban Felling
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Pioneering sub-millimeter vibration isolation and acoustic containment that allows
                  multi-storey towers to be systematically dismantled immediately adjacent to live
                  metro viaducts, retail centres, and operational residential towers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>&lt;2.0 mm/s Peak Particle Velocity Standards</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-900 flex items-center justify-center mb-6">
                  <Recycle className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-950 mb-3 tracking-tight">
                  100% Circular Recovery
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Redefining demolition sites as secondary raw material suppliers. On-site mobile
                  crushing transforms demolished reinforced concrete into certified road sub-base,
                  while high-tensile structural steel is re-smelted into the UAE supply chain.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Aligned with UAE Net Zero 2050 Mandate</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-900 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-neutral-950 mb-3 tracking-tight">
                  Robotic &amp; Remote Dis-assembly
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  Replacing manual high-risk operations with electric remote-controlled Brokk
                  crunchers, diamond wire sawing, and drone-guided structural stress mapping to
                  eliminate operator exposure on compromised structural floors.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-200/60 text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Zero-Emission Interior Stripping Fleet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="py-20 sm:py-28 bg-neutral-950 text-white relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Eyebrow & Section Heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
                Operational Mandate
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight leading-tight mb-5">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              To deliver safe, vibration-isolated, surgically executed deconstructions that
              eliminate structural collateral risks, fast-track municipal clearances, and guarantee
              uncompromising schedule delivery for developers, civil authorities, and industrial
              operators.
            </p>
          </div>

          {/* Mission Core Mandates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  Commitment 01
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                  Unconditional Safety Governance
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Every structural cut, high-reach shear pass, and load-transfer sequence is
                  peer-reviewed by chartered civil engineers before physical execution, ensuring an
                  unyielding zero-harm environment.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-neutral-800 space-y-2 text-xs font-mono text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Seismic &amp; Crack Gauge Monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>3D Finite Element Structural Modeling</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  Commitment 02
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                  Statutory &amp; Authority Assurance
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Direct government liaison across Dubai Municipality, Trakhees, DDA, RTA, and DEWA.
                  We take complete liability for NOC procurement, utility disconnections, and formal
                  closeout certificates.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-neutral-800 space-y-2 text-xs font-mono text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Guaranteed Fast-Track NOC Timelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Zero Regulatory Violation Penalties</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  Commitment 03
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                  Predictable Turnkey Handover
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  From initial hazmat/asbestos abatement to certified pad compaction, we hand over
                  clean, leveled sites on time, enabling follow-on piling and foundation contractors
                  to mobilize without delay.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-neutral-800 space-y-2 text-xs font-mono text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Milestone-Backed Commercial Contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Certified Pad Level Handover Reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION: Minimalist Cards, No Extra Content */}
      <section className="py-20 sm:py-28 bg-white [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500">
                Foundational Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-neutral-950 tracking-tight leading-tight mb-5">
              Core Values
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              The immutable standards guiding every calculation, permit application, blast, shear
              cut, and site handover across the United Arab Emirates.
            </p>
          </div>

          {/* Minimalist Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.num}
                  className="group p-8 rounded-2xl bg-neutral-50/80 hover:bg-white border border-neutral-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md">
                        {val.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 group-hover:text-amber-600 group-hover:border-amber-300 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-serif font-semibold text-neutral-950 mb-3 tracking-tight">
                      {val.title}
                    </h3>

                    {/* Minimalist Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-amber-500 transition-colors" />
                    <span>Non-Negotiable Principle</span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Summary of Engineering Culture */}
            <div className="p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-neutral-800 px-2.5 py-1 rounded-md">
                    06
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-amber-400">
                    <HardHat className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3 tracking-tight">
                  Engineering Leadership
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Our field directors and structural engineers hold over 18 years of direct
                  experience in the GCC, personally managing every critical high-reach lift and
                  statutory inspection.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center gap-2 text-xs font-mono text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Class A Unlimited Licensing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTHORITY LICENSES & ACCREDITATIONS BAR */}
      <section className="py-14 bg-neutral-100/70 border-y border-neutral-200/90 [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-600 font-semibold">
              Statutory Authority Accreditations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ACCREDITATIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-neutral-200 text-center shadow-2xs hover:border-neutral-300 transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-neutral-900 mb-1">
                  {item.name}
                </div>
                <div className="text-[11px] text-neutral-500 font-normal leading-snug">
                  {item.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote enquiry band: details are sent to WhatsApp */}
      <Suspense fallback={<SectionFallback />}>
        <HomeEnquirySection />
      </Suspense>

      {/* 6. CALL TO ACTION & EXPLORE SERVICES */}
      <section className="py-20 sm:py-24 bg-white [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="rounded-3xl bg-neutral-950 text-white p-10 sm:p-14 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold block mb-3">
                Ready to Mobilize
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight mb-4">
                Partner with the UAE's Premier Demolition Contractor
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Connect directly with our senior structural demolition engineers for a confidential
                technical appraisal, seismic feasibility assessment, and rapid municipal permit
                roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSurveySubmitted(false);
                  setIsSurveyModalOpen(true);
                }}
                className="bg-amber-500 hover:bg-amber-400 text-white font-medium px-7 py-3.5 rounded-full text-sm sm:text-base transition-colors shadow-md text-center cursor-pointer"
              >
                Request Technical Survey
              </button>

              <button
                type="button"
                onClick={() => onNavigatePage('building-demolition')}
                className="border border-neutral-700 hover:border-neutral-500 text-white hover:text-white px-6 py-3.5 rounded-full text-sm font-medium transition-colors text-center cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Survey Request Modal */}
      <AnimatePresence>
        {isSurveyModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm"
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-survey-title"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 sm:p-8 z-10 text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                <div>
                  <h3
                    id="about-survey-title"
                    className="font-serif font-semibold text-lg text-neutral-950"
                  >
                    Schedule Engineering Survey
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5">
                    Dubai &amp; UAE Nationwide · Rapid 24h Response
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSurveyModalOpen(false)}
                  aria-label="Close consultation modal"
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {surveySubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="font-serif font-semibold text-lg text-neutral-950">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
                    Our lead structural demolition engineer will contact you shortly to coordinate
                    your site inspection and preliminary method review.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSurveyModalOpen(false);
                      setSurveySubmitted(false);
                      setSurveyPhone('');
                      setSurveyLocation('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroSurveySubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="about-survey-phone"
                      className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                    >
                      UAE Contact Number / WhatsApp{' '}
                      <span className="text-amber-600" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <Phone
                        className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                        aria-hidden="true"
                      />
                      <input
                        id="about-survey-phone"
                        type="tel"
                        required
                        aria-required="true"
                        autoComplete="tel"
                        value={surveyPhone}
                        onChange={(e) => setSurveyPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full pl-10 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about-survey-location"
                      className="block text-xs font-mono font-medium text-neutral-700 mb-1.5"
                    >
                      Project Site Location / Emirate
                    </label>
                    <div className="relative">
                      <MapPin
                        className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                        aria-hidden="true"
                      />
                      <input
                        id="about-survey-location"
                        type="text"
                        autoComplete="street-address"
                        value={surveyLocation}
                        onChange={(e) => setSurveyLocation(e.target.value)}
                        placeholder="e.g. Sheikh Zayed Road / Downtown Dubai / JAFZA"
                        className="w-full pl-10 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-950 font-normal leading-relaxed">
                    Includes initial satellite aerial survey, Dubai Municipality Class A methodology
                    outline, and preliminary vibration buffer analysis.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-medium text-sm transition-all shadow-sm active:scale-98 cursor-pointer mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Dispatching...' : 'Confirm Survey Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

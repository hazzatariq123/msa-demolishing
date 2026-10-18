import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PointerItem {
  id: string;
  num: string;
  title: string;
  text: string;
  badge: string;
}

const POINTERS: PointerItem[] = [
  {
    id: 'p1',
    num: '01',
    title: 'Class A Municipal Standing',
    text: 'Pre-cleared with Dubai Municipality, Civil Defense, and RTA for zero permit delays.',
    badge: 'Unlimited Height License'
  },
  {
    id: 'p2',
    num: '02',
    title: 'Sub-Millimeter Vibration Control',
    text: 'Calibrated 3-axis geophone telemetry guaranteeing zero subsidence on adjacent Metro viaducts.',
    badge: '0.0 mm Track Drift'
  },
  {
    id: 'p3',
    num: '03',
    title: 'Deep Shoring & Maritime Expertise',
    text: 'Engineered secant pile extraction and coastal dewatering certified by Trakhees EHS standards.',
    badge: 'Zero Coastal Siltation'
  },
  {
    id: 'p4',
    num: '04',
    title: '98% Al Sa‘fat Circularity',
    text: 'On-site concrete crushing and magnetic rebar recovery certified for immediate infrastructure reuse.',
    badge: 'Green Building Verified'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-white border-t border-neutral-200/90 text-neutral-900 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      {/* Subtle blueprint grid background watermark */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-xs bg-amber-600" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold">
              WHY CHOOSE MSA // THE DUBAI STANDARD
            </span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-tight mb-4">
            Engineered for Consequence. Trusted Across the UAE.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
            Executing surgical deconstruction directly adjacent to live metro transit, glass
            high-rises, and marine waterfronts with uncompromising safety.
          </p>
        </div>

        {/* 2-Column Professional Layout: One Side Image & Other Side Content with 4 Vertical Pointers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* SIDE 1: High-End Engineering Inspection Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-neutral-950 group">
              {/* Main Image */}
              <div className="aspect-[4/3] sm:aspect-[14/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  src="/images/uae_demolition_site_1791830061517.webp"
                  srcSet="/images/uae_demolition_site_1791830061517-640.webp 640w, /images/uae_demolition_site_1791830061517-828.webp 828w, /images/uae_demolition_site_1791830061517.webp 1280w"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt="Engineered building demolition site in Dubai with high-reach excavator, water mist dust suppression, and civil safety engineers reviewing blueprints"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* Bottom Image Caption Card */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-1">
                  LICENSED PE STRUCTURAL SUPERVISION
                </div>
                <div className="font-serif font-bold text-lg sm:text-xl text-white mb-1 leading-snug">
                  Zero-Tolerance Vibration Protocol
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed max-w-md font-normal">
                  Continuous 24/7 seismic telemetry linked directly to municipal inspectors and RTA
                  central monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* SIDE 2: Content with 4 Pointers in a Vertical Line (10-15 words each) */}
          <div className="lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-4">
            <div className="relative">
              {/* Continuous Vertical Connecting Line */}
              <div className="absolute left-4 sm:left-5 top-5 bottom-8 w-px bg-neutral-200" />

              {/* 4 Pointers Arranged in a Vertical Line */}
              <div className="space-y-6 sm:space-y-7">
                {POINTERS.map((item) => (
                  <div key={item.id} className="relative pl-12 sm:pl-14 group">
                    {/* Node on the Vertical Line */}
                    <div className="absolute left-1.5 sm:left-2 top-0.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#FAF9F5] border border-neutral-300 group-hover:border-amber-500 group-hover:bg-amber-50 transition-colors flex items-center justify-center font-mono text-[11px] font-bold text-neutral-800 shadow-2xs">
                      {item.num}
                    </div>

                    {/* Pointer Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-neutral-950 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Concise 10-15 Words Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Regulatory Guarantee Banner */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-end gap-4 text-xs font-mono text-neutral-500">
              <a
                href="#portfolio"
                className="text-neutral-900 font-semibold hover:text-amber-600 transition-colors flex items-center gap-1"
              >
                View Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

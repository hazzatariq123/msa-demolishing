import React, { useState } from 'react';
import { m as motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import inspectionImg from '../assets/images/inspection_icon_png_1791823642120-640.webp';
import permitImg from '../assets/images/permit_doc_png_1791823653448-640.webp';
import fleetImg from '../assets/images/emirates_fleet_png_1791823665730-640.webp';

interface WhatYouGetBeforeYouStartProps {
  onOpenSurvey?: () => void;
}

export const WhatYouGetBeforeYouStart: React.FC<WhatYouGetBeforeYouStartProps> = ({
  onOpenSurvey
}) => {
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalDescription, setModalDescription] = useState<string>('');

  const openSample = (title: string, desc: string) => {
    setModalTitle(title);
    setModalDescription(desc);
    setSampleModalOpen(true);
  };

  return (
    <section
      id="before-you-start"
      className="relative w-full py-24 sm:py-32 bg-white border-t border-neutral-200/90 text-neutral-900 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-neutral-800">
              Zero Commitment • Complete Clarity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-neutral-950 tracking-tight leading-[1.08]"
          >
            What you get before you start
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-5 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Every project begins with transparent engineering, sovereign statutory clearance
            mapping, and an exact municipal price quote—with no hidden surprises.
          </motion.p>
        </div>

        {/* 3-Column Feature Cards Layout with Full-Bleed Best-Fit Infographics */}
        <div className="carousel-m grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Free On-Site Inspection & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Direct Clean PNG Image Container - No Shadows, Pure Clean Presentation */}
              <div className="w-full h-56 sm:h-60 bg-white relative flex items-center justify-center p-6 border-b border-neutral-100">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  src={inspectionImg}
                  alt="Engineers inspecting blueprint with laser survey"
                  className="max-h-44 sm:max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body Text */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded">
                    SURVEY ACTIVE • 24H SLA
                  </span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                    100% Free Visit
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 mb-3 tracking-tight">
                  Free On-Site Inspection & Quote
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Site visits within 24 hours anywhere in the UAE. Detailed, fixed-price quotes with
                  no hidden fees or surprise variations.
                </p>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenSurvey) {
                      onOpenSurvey();
                    } else {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Request a Free Visit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 100% Permit Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Direct Clean PNG Image Container - No Shadows, Pure Clean Presentation */}
              <div className="w-full h-56 sm:h-60 bg-white relative flex items-center justify-center p-6 border-b border-neutral-100">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  src={permitImg}
                  alt="Dubai Municipality approved demolition permit document"
                  className="max-h-44 sm:max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body Text */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded">
                    MUNICIPALITY CLEARED
                  </span>
                  <span className="text-neutral-700 font-semibold bg-neutral-100 px-2 py-0.5 rounded text-[10px]">
                    Class A Accredited
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 mb-3 tracking-tight">
                  100% Permit Management
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Dubai Municipality, Civil Defense, RTA, and DEWA NOCs—we handle all approvals so
                  you never have to deal with government paperwork.
                </p>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() =>
                    openSample(
                      '100% Permit Management',
                      'We execute direct electronic submission and liaison across Dubai Municipality (DM), Roads and Transport Authority (RTA), Dubai Civil Defense (DCD), DEWA (Utility isolation clearance), and Trakhees EHS. Zero delays, full statutory liability coverage.'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <span>Learn About Permits</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 3: All 7 Emirates Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Direct Clean PNG Image Container - No Shadows, Pure Clean Presentation */}
              <div className="w-full h-56 sm:h-60 bg-white relative flex items-center justify-center p-6 border-b border-neutral-100">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  src={fleetImg}
                  alt="UAE heavy demolition machinery and nationwide logistics fleet"
                  className="max-h-44 sm:max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body Text */}
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded">
                    UAE REGIONAL FLEET
                  </span>
                  <span className="text-neutral-700 font-semibold bg-neutral-100 px-2 py-0.5 rounded text-[10px]">
                    7 / 7 Emirates
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-neutral-950 mb-3 tracking-tight">
                  All 7 Emirates Coverage
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Licensed and equipped to operate across Dubai, Abu Dhabi, Sharjah, Ajman, RAK,
                  UAQ, and Fujairah with local plant yards.
                </p>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
              <div className="pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() =>
                    openSample(
                      'All 7 Emirates Coverage',
                      'MSA Demolishing maintains authorized plant yards and registered commercial engineering classifications across all seven emirates: Dubai (DM), Abu Dhabi (DMT / Musanada), Sharjah (SEWA & SM), Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah.'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-950 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <span>View Coverage Areas</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      {sampleModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-modal-title"
            className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200 text-left"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
              <h3 id="sample-modal-title" className="font-serif font-bold text-xl text-neutral-900">
                {modalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setSampleModalOpen(false)}
                aria-label="Close dialog"
                className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                ✕
              </button>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              {modalDescription}
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSampleModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

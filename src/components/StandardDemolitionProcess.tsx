import React from 'react';
import { m as motion } from 'motion/react';
import {
  ClipboardCheck,
  FileCheck2,
  Droplets,
  Hammer,
  Recycle,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface StandardDemolitionProcessProps {
  onOpenSurvey?: () => void;
}

interface ProcessStep {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  sla: string;
}

const DEMOLITION_STEPS: ProcessStep[] = [
  {
    step: '01',
    badge: 'PHASE 01',
    title: 'STRUCTURAL AUDIT & HAZMAT SURVEY',
    subtitle: 'Pre-Engineering & Hazardous Material Inspection',
    description:
      'Rigorous structural integrity assessment, 3D laser stability scans of load-bearing elements, and certified environmental testing for asbestos, lead, and chemical residues to formulate a zero-incident Demolition Work Plan (DWP).',
    icon: ClipboardCheck,
    sla: 'Phase 01 · Pre-Engineering'
  },
  {
    step: '02',
    badge: 'PHASE 02',
    title: 'MUNICIPAL PERMITS & UTILITY CAPPING',
    subtitle: 'Civil Defense & Multi-Utility Isolation NOCs',
    description:
      'Securing all statutory Dubai Municipality / Abu Dhabi DPM demolition permits, Civil Defense clearances, RTA road occupation NOCs, and certified physical isolation and capping of all live gas, electrical, water, and telecom lines.',
    icon: FileCheck2,
    sla: 'Phase 02 · Statutory Permits'
  },
  {
    step: '03',
    badge: 'PHASE 03',
    title: 'SITE ENCLOSURE & DUST SUPPRESSION',
    subtitle: 'Perimeter Blast Hoarding & Mist Cannons',
    description:
      'Erection of certified heavy-duty perimeter safety hoarding, anti-debris containment netting, acoustic dampening screens, and deployment of atomized high-pressure water mist cannons to guarantee 100% dust containment.',
    icon: Droplets,
    sla: 'Phase 03 · Site Containment'
  },
  {
    step: '04',
    badge: 'PHASE 04',
    title: 'CONTROLLED PRECISION DEMOLITION',
    subtitle: 'Top-Down Mechanical & High-Reach Shearing',
    description:
      'Systematic floor-by-floor mechanical deconstruction employing high-reach excavators, robotic crunchers, and hydraulic shears. Continuously monitored with real-time vibration sensors to ensure zero impact on adjacent structures.',
    icon: Hammer,
    sla: 'Phase 04 · Active Demolition'
  },
  {
    step: '05',
    badge: 'PHASE 05',
    title: 'ON-SITE CRUSHING & 95%+ RECYCLING',
    subtitle: 'Sustainable Circular Aggregate Recovery',
    description:
      'On-site mobile jaw crushing of reinforced concrete into certified structural road-base aggregate. High-powered electromagnetic separators recover rebar and structural steel, achieving an industry-leading >95% landfill diversion rate.',
    icon: Recycle,
    sla: 'Phase 05 · Material Sorting'
  },
  {
    step: '06',
    badge: 'PHASE 06',
    title: 'SITE REMEDIATION & FINAL HANDOVER',
    subtitle: 'Compaction Testing & Municipal Sign-Off',
    description:
      'Subgrade backfilling, laser grading, soil compaction density testing, and certified environmental clearance. We deliver the final Municipal Completion Certificate (BCC) and hand over a clean, shovel-ready site for new construction.',
    icon: CheckCircle2,
    sla: 'Phase 06 · Final Clearance'
  }
];

export const StandardDemolitionProcess: React.FC<StandardDemolitionProcessProps> = () => {
  return (
    <section
      id="demolition-process"
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 border-t border-b border-neutral-200/90 overflow-hidden select-none [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      {/* Subtle clean architectural dot matrix background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#111827 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with Signature Yellow Branding */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow: Centered Yellow Bar Lines flanking 'HOW WE WORK' */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-3"
          >
            <span className="w-10 sm:w-16 h-[3px] bg-amber-400 rounded-full inline-block" />
            <span className="text-amber-500 font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase font-sans">
              HOW WE WORK
            </span>
            <span className="w-10 sm:w-16 h-[3px] bg-amber-400 rounded-full inline-block" />
          </motion.div>

          {/* Main Title: Bold high-contrast uppercase sans-serif */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 font-sans"
          >
            OUR STANDARD DEMOLITION PROCESS
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Engineered structural safety, UAE municipal compliance, and 95%+ sustainable recycling —
            a proven 6-phase standard demolition protocol from initial audit to shovel-ready
            handover.
          </motion.p>
        </div>

        {/* 100% Presentation: Pure Alternating Timeline Process */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Vertical Dim Spine Line (Desktop) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-neutral-200 rounded-full" />

          {/* Mobile Left Vertical Dim Spine Line */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 -translate-x-1/2 w-[2px] bg-neutral-200 rounded-full" />

          <div className="space-y-12 sm:space-y-16 relative z-10">
            {DEMOLITION_STEPS.map((stepItem, index) => {
              const IconComponent = stepItem.icon;
              const isEven = index % 2 === 1; // Alternating 0=left, 1=right, 2=left, 3=right...

              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card container (half width on desktop with symmetric spacing from center line) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-amber-400 overflow-hidden">
                      {/* Huge Subtle Watermark Number in Top-Right Corner */}
                      <span className="absolute -top-3 -right-2 text-7xl sm:text-8xl font-black font-sans text-neutral-100 select-none pointer-events-none group-hover:text-amber-100/60 transition-colors">
                        {stepItem.step}
                      </span>

                      {/* Subtle Icon Watermark in Bottom-Right Corner */}
                      <div className="absolute -bottom-4 -right-4 text-neutral-100/80 pointer-events-none select-none group-hover:text-amber-100/40 transition-colors">
                        <IconComponent className="w-24 h-24 stroke-[1]" />
                      </div>

                      <div className="relative z-10">
                        {/* Top Row: Phase SLA */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                            <Clock className="w-3 h-3 text-amber-500" />
                            {stepItem.sla}
                          </span>
                        </div>

                        {/* Icon & Heading */}
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-amber-400 text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 group-hover:bg-amber-300 transition-all">
                            <IconComponent className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 group-hover:text-amber-600 transition-colors">
                              {stepItem.title}
                            </h3>
                            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mt-0.5">
                              {stepItem.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                          {stepItem.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge on Timeline directly on the dim line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-400 border-[3.5px] border-white ring-1 ring-neutral-200 text-white font-black text-sm sm:text-base flex items-center justify-center shadow-md group-hover:scale-110 group-hover:ring-amber-400 transition-all">
                      {stepItem.step}
                    </div>
                  </div>

                  {/* Empty spacing half for desktop balance */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

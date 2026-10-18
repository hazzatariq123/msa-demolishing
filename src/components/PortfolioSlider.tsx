import React, { useState } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { PortfolioProject, PORTFOLIOS_BY_SERVICE, HOME_PORTFOLIO } from '../data/portfolioData';
import { srcSetFor, CARD_SIZES } from '../utils/img';

export type { PortfolioProject };

export interface PortfolioSliderProps {
  serviceId?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  projects?: PortfolioProject[];
}

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  serviceId,
  title,
  subtitle,
  badge,
  projects
}) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Resolve relevant portfolio by active service or fall back to home
  const categoryData = (serviceId && PORTFOLIOS_BY_SERVICE[serviceId]) || HOME_PORTFOLIO;
  const displayProjects = projects || categoryData.projects;
  const displayEyebrow = badge || categoryData.eyebrow;
  const displayTitle = title || categoryData.title;
  const displayDescription = subtitle || categoryData.description;

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 sm:py-32 bg-white border-t border-neutral-200/90 text-neutral-900 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header: Minimalist Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 pb-8 border-b border-neutral-200/80">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-xs bg-amber-600" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold">
                {displayEyebrow}
              </span>
            </div>

            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-tight mb-4">
              {displayTitle}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {displayDescription}
            </p>
          </div>
        </div>

        {/* 4 Cards on Row 1, 4 Cards on Row 2 Grid (Responsive: 1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="carousel-m grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setSelectedProject(project)}
              className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-end"
            >
              {/* Full Card Background Image */}
              <img
                width={1280}
                height={800}
                src={project.image}
                srcSet={srcSetFor(project.image)}
                sizes={CARD_SIZES}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Seamless Bottom Gradient Scrim for Heading Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-300" />

              {/* Top Tag: Project Index Number */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <span className="font-mono text-xs font-bold tracking-wider text-white bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                  {project.index}
                </span>

                <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-amber-600 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Heading & Meta at the Bottom of the Image Card */}
              <div className="relative z-10 p-5 sm:p-6 text-left bg-neutral-950/85">
                <div className="flex items-center gap-1.5 text-amber-300 text-[11px] font-mono uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors leading-snug drop-shadow-sm mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-300 font-normal line-clamp-1 group-hover:text-neutral-200 transition-colors">
                  {project.category} · {project.authority}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High-Definition Project Inspection Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-950/75 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-project-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-white flex items-center justify-center transition-all cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="overflow-y-auto">
                {/* Modal Hero Image */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                    src={selectedProject.image}
                    srcSet={srcSetFor(selectedProject.image)}
                    sizes={CARD_SIZES}
                    alt={`${selectedProject.title} - ${selectedProject.category} execution in Dubai`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-black/30" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                      <span className="px-2 py-0.5 rounded bg-amber-600 font-bold text-white">
                        PROJECT {selectedProject.index}
                      </span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-neutral-300 uppercase">{selectedProject.category}</span>
                    </div>
                    <h3
                      id="portfolio-project-title"
                      className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight"
                    >
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 font-mono text-xs">
                    <div>
                      <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-1">
                        Scale / Height
                      </div>
                      <div className="font-bold text-neutral-900">
                        {selectedProject.specs.heightOrArea}
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-1">
                        Seismic Control
                      </div>
                      <div className="font-bold text-neutral-900">
                        {selectedProject.specs.vibrationLevel}
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-1">
                        Material Circularity
                      </div>
                      <div className="font-bold text-amber-700">
                        {selectedProject.specs.recyclingRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-1">
                        Time to Completion
                      </div>
                      <div className="font-bold text-neutral-900">
                        {selectedProject.specs.duration}
                      </div>
                    </div>
                  </div>

                  {/* Project Detailed Description */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                      Engineering Scope &amp; Methodology
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                      {selectedProject.fullDetails}
                    </p>
                  </div>

                  {/* Certifications & Clearances */}
                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{selectedProject.authority} Approved</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(null);
                        const inquiry = document.getElementById('services');
                        if (inquiry) inquiry.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-amber-600 transition-colors text-center cursor-pointer shadow-sm"
                    >
                      Request Similar Site Assessment
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

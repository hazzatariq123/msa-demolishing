import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_SERVICES_DATA } from '../data/servicesData';
import { PageLink } from './PageLink';

/** Cross-links each service page to the other services, with descriptive anchor text. */
export const RelatedServices: React.FC<{
  currentId: string;
  onNavigate: (pageId: string) => void;
}> = ({ currentId, onNavigate }) => {
  const others = Object.values(ALL_SERVICES_DATA).filter((service) => service.id !== currentId);

  return (
    <section
      aria-labelledby="related-services-heading"
      className="w-full bg-[#FAF9F5] border-t border-neutral-200/80 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2
          id="related-services-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-8"
        >
          Other Demolition Services
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((service) => (
            <li key={service.id}>
              <PageLink
                to={service.id}
                onNavigate={onNavigate}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500"
              >
                <span className="text-lg font-semibold text-neutral-950 group-hover:text-amber-700">
                  {service.heroTitle}
                </span>
                <span className="mt-2 flex-grow text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {service.heroDescription}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                  {service.navTitle} services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PageLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_SERVICES_DATA } from '../data/servicesData';
import { PageLink } from './PageLink';

/** Links to the service pages with descriptive anchor text. On a service page it lists the other three. */
export const RelatedServices: React.FC<{
  currentId?: string;
  title?: string;
  /** Adds a contextual link to the contact page under the cards (off on the contact page itself). */
  showContactLink?: boolean;
  onNavigate: (pageId: string) => void;
}> = ({ currentId, title = 'Other Demolition Services', showContactLink = true, onNavigate }) => {
  const others = Object.values(ALL_SERVICES_DATA).filter((service) => service.id !== currentId);

  return (
    <section
      aria-labelledby="related-services-heading"
      className="w-full bg-[#FAF9F5] border-t border-neutral-200/80 py-16 sm:py-20 [content-visibility:auto] [contain-intrinsic-size:auto_800px]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2
          id="related-services-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-8"
        >
          {title}
        </h2>
        <ul
          className={`grid grid-cols-1 gap-6 ${others.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}
        >
          {others.map((service) => (
            <li key={service.id}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500">
                <h3 className="text-lg font-semibold text-neutral-950 group-hover:text-amber-700">
                  <PageLink
                    to={service.id}
                    onNavigate={onNavigate}
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                  >
                    {service.heroTitle}
                  </PageLink>
                </h3>
                <p className="mt-2 flex-grow text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {service.heroDescription}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700"
                >
                  {service.navTitle} services
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </li>
          ))}
        </ul>
        {showContactLink && (
          <p className="mt-8 text-neutral-700">
            Not sure which service your project needs?{' '}
            <PageLink
              to="contact"
              onNavigate={onNavigate}
              className="font-semibold text-amber-700 underline underline-offset-2"
            >
              Ask our engineers for a free site survey
            </PageLink>
            .
          </p>
        )}
      </div>
    </section>
  );
};

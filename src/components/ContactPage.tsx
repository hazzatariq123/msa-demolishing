import React from 'react';
import { CONTACT_HERO } from '../data/heroShells';
import { srcSetFor } from '../utils/img';
import { ContactInfoSection } from './ContactInfoSection';
import { HomeEnquirySection } from './HomeEnquirySection';

/** Dedicated contact page: the only place contact details and the enquiry form live. */
export const ContactPage: React.FC = () => (
  <div className="w-full">
    <section
      aria-label="Contact Introduction"
      className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-neutral-950 text-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={CONTACT_HERO.image}
          srcSet={srcSetFor(CONTACT_HERO.image)}
          sizes="100vw"
          width={1280}
          height={714}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          alt={`${CONTACT_HERO.title} - MSA Demolishing Dubai`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/55 via-neutral-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-300 font-bold [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_12px_rgba(0,0,0,0.8)]">
              {CONTACT_HERO.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1] [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
            {CONTACT_HERO.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed max-w-2xl [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_2px_16px_rgba(0,0,0,0.85)]">
            {CONTACT_HERO.description}
          </p>
        </div>
      </div>
    </section>

    <ContactInfoSection />
    <HomeEnquirySection />
  </div>
);

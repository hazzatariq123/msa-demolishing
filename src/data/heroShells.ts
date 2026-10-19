import { ALL_SERVICES_DATA } from './servicesData';

/** Hero copy shared by the React pages and the static first-paint shell injected into index.html at build time. */
export interface HeroCopy {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  label: string;
}

export const HOME_HERO: HeroCopy = {
  image: '/images/high-reach-building-demolition-dubai.webp',
  eyebrow: 'MSA DEMOLISHING · UAE CLASS A CONTRACTOR',
  title: 'Demolition Contractor in Dubai & Across the UAE',
  description:
    'Class A licensed contractor executing high-reach building felling, industrial plant dismantling, interior strip-outs, and civil infrastructure deconstruction with rapid municipal permits, zero-vibration telemetry, and 98% recycled recovery.',
  label: 'Hero'
};

export const ABOUT_HERO: HeroCopy = {
  image: '/images/msa-demolition-engineers-dubai.webp',
  eyebrow: 'ABOUT MSA DEMOLISHING · UAE CLASS A CONTRACTOR',
  title: 'About MSA: Class A Demolition Engineers in Dubai',
  description:
    "Founded on rigorous structural engineering principles, MSA Demolishing is the UAE's trusted Class A licensed contractor executing high-reach felling, heavy industrial plant dismantling, and precision urban deconstruction with zero collateral risk.",
  label: 'About'
};

export const CONTACT_HERO: HeroCopy = {
  image: '/images/engineers-site-inspection-dubai.webp',
  eyebrow: 'MSA DEMOLISHING · UAE',
  title: 'Contact MSA Demolition in Dubai',
  description:
    'Talk to our engineers about a site survey, a quote or a project in Dubai and across the UAE. Send a message, call us or visit the showroom.',
  label: 'Contact'
};

export const HERO_SHELLS: Record<string, HeroCopy> = {
  home: HOME_HERO,
  about: ABOUT_HERO,
  contact: CONTACT_HERO,
  ...Object.fromEntries(
    Object.entries(ALL_SERVICES_DATA).map(([id, d]) => [
      id,
      {
        image: d.heroImage,
        eyebrow: d.heroEyebrow,
        title: d.heroTitle,
        description: d.heroDescription,
        label: d.navTitle
      }
    ])
  )
};

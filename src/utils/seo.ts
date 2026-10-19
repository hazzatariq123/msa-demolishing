import { pageHref } from '../data/routes';
import { FAQS, faqPlainText } from '../data/faqs';

export interface PageSEOMetadata {
  /** 50-60 characters. */
  title: string;
  /** 120-160 characters. */
  description: string;
  ogImage: string;
  /** Page type for structured data. */
  schemaType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service';
  breadcrumbs: { name: string; pageId: string }[];
}

const HOME = { name: 'Home', pageId: 'home' };

export const PAGES_SEO: Record<string, PageSEOMetadata> = {
  home: {
    title: 'MSA Demolishing | Demolition Contractor in Dubai, UAE',
    description:
      'Class A licensed demolition contractor in Dubai. High-reach building felling, industrial dismantling, interior strip-outs and infrastructure demolition.',
    ogImage: '/images/high-reach-building-demolition-dubai.webp',
    schemaType: 'WebPage',
    breadcrumbs: [HOME]
  },
  about: {
    title: 'About MSA Demolishing | Class A Demolition Experts UAE',
    description:
      'Meet MSA Wrecking & Demolition Works LLC: Class A licensed engineers delivering safe, controlled demolition and high material recovery across the UAE.',
    ogImage: '/images/msa-demolition-engineers-dubai.webp',
    schemaType: 'AboutPage',
    breadcrumbs: [HOME, { name: 'About Us', pageId: 'about' }]
  },
  contact: {
    title: 'Contact MSA Demolishing | Free Site Survey in Dubai',
    description:
      'Contact MSA Demolishing in Al Qusais, Dubai. Call or WhatsApp +971 55 434 8690 for a free site survey and a written demolition quote within 24 hours.',
    ogImage: '/images/engineers-site-inspection-dubai.webp',
    schemaType: 'ContactPage',
    breadcrumbs: [HOME, { name: 'Contact', pageId: 'contact' }]
  },
  'building-demolition': {
    title: 'Building Demolition in Dubai & UAE | MSA Demolishing',
    description:
      'Class A licensed building demolition in Dubai: high-reach felling, precision wire sawing and controlled teardown of towers with vibration monitoring.',
    ogImage: '/images/high-reach-building-demolition-dubai.webp',
    schemaType: 'Service',
    breadcrumbs: [HOME, { name: 'Building Demolition', pageId: 'building-demolition' }]
  },
  'industrial-demolition': {
    title: 'Industrial Demolition & Plant Dismantling | MSA UAE',
    description:
      'Turnkey industrial demolition in the UAE: refineries, silos, steel plants and power stations dismantled safely under strict permit and safety control.',
    ogImage: '/images/industrial-demolition-heavy-shear.webp',
    schemaType: 'Service',
    breadcrumbs: [HOME, { name: 'Industrial Demolition', pageId: 'industrial-demolition' }]
  },
  'interior-stripout': {
    title: 'Interior Strip-Out & Soft Demolition Dubai | MSA',
    description:
      'Commercial interior strip-out and soft demolition in Dubai: retail, offices and MEP clearance with dust control and night-shift working.',
    ogImage: '/images/interior-strip-out-dubai.webp',
    schemaType: 'Service',
    breadcrumbs: [HOME, { name: 'Interior Strip-Out', pageId: 'interior-stripout' }]
  },
  'infrastructure-demolition': {
    title: 'Infrastructure & Bridge Demolition UAE | MSA',
    description:
      'Bridge, flyover and infrastructure demolition in the UAE, including viaducts, marine wharves and deep shoring removal under RTA approvals.',
    ogImage: '/images/flyover-viaduct-demolition-dubai.webp',
    schemaType: 'Service',
    breadcrumbs: [HOME, { name: 'Infrastructure Demolition', pageId: 'infrastructure-demolition' }]
  }
};

/** Page-level structured data (breadcrumbs plus the page itself). Used at build time and on client navigation. */
export function buildPageSchema(pageId: string, origin: string): object[] {
  const seo = PAGES_SEO[pageId] ?? PAGES_SEO.home;
  const url = `${origin}${pageHref(pageId)}`;

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: seo.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${origin}${pageHref(crumb.pageId)}`
    }))
  };

  const page =
    seo.schemaType === 'Service'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: seo.breadcrumbs[seo.breadcrumbs.length - 1].name,
          description: seo.description,
          url,
          areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
          provider: { '@id': `${origin}/#organization` }
        }
      : {
          '@context': 'https://schema.org',
          '@type': seo.schemaType,
          name: seo.title,
          description: seo.description,
          url,
          isPartOf: { '@id': `${origin}/#website` }
        };

  const faq = FAQS[pageId];
  if (!faq) return [breadcrumbs, page];

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: faqPlainText(item.answer) }
    }))
  };

  return [breadcrumbs, page, faqPage];
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/** Keeps the title, meta tags, canonical link and page schema in step with the page shown after client-side navigation. */
export function applyPageSEO(pageId: string) {
  if (typeof document === 'undefined') return;

  const seo = PAGES_SEO[pageId] ?? PAGES_SEO.home;
  const origin = window.location.origin;
  const url = `${origin}${pageHref(pageId)}`;

  document.title = seo.title;
  setMeta('name', 'description', seo.description);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', `${origin}${seo.ogImage}`);
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', `${origin}${seo.ogImage}`);

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  let schema = document.getElementById('schema-page') as HTMLScriptElement | null;
  if (!schema) {
    schema = document.createElement('script');
    schema.id = 'schema-page';
    schema.type = 'application/ld+json';
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify(buildPageSchema(pageId, origin));
}

export interface PageSEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType: string;
  ogImage: string;
  breadcrumbs: { name: string; path: string }[];
}

export const SITE_BASE_URL =
  typeof window !== 'undefined'
    ? window.location.origin
    : 'https://ais-dev-4ria3ffxyzwmxx7dcoyb5j-803648951003.asia-southeast1.run.app';

export const PAGES_SEO: Record<string, PageSEOMetadata> = {
  home: {
    title: 'MSA Demolishing | Engineered Structural Demolition UAE',
    description:
      'Class A licensed contractor executing high-reach building felling, industrial plant dismantling, interior strip-outs, and civil infrastructure deconstruction across Dubai and UAE.',
    keywords:
      'demolition contractor dubai, building demolition uae, controlled deconstruction, high-reach felling, civil dismantling, concrete recycling uae',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: '/images/hero_building_demolition_1791830585768.webp',
    breadcrumbs: [{ name: 'Home', path: '/' }]
  },
  contact: {
    title: 'Contact Us | MSA Demolishing UAE - Site Surveys & Demolition Quotes',
    description:
      'Contact MSA Demolishing in Dubai: send a message, call our manager or visit us in Al Qusais Industrial 1 for a free site survey and demolition quote.',
    keywords:
      'contact msa demolishing, demolition quote dubai, demolition contractor al qusais, site survey dubai',
    canonicalPath: '/#contact',
    ogType: 'website',
    ogImage: '/images/dubai_engineers_inspection_1791761613623.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/#contact' }
    ]
  },
  about: {
    title: 'About Us | MSA Demolishing UAE - Vision, Mission & Class A License',
    description:
      'Learn about MSA Demolishing: 18+ years of engineering rigor, zero-vibration telemetry, Class A municipal certifications, and circular resource recovery.',
    keywords:
      'about msa demolishing, demolition company profile dubai, class a demolition contractor, dubai municipality approved demolition, demolition engineers uae',
    canonicalPath: '/#about',
    ogType: 'article',
    ogImage: '/images/about_us_engineers_1791866089032.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/#about' }
    ]
  },
  'building-demolition': {
    title: 'Building Demolition & High-Reach Felling | MSA Demolishing UAE',
    description:
      'Class A licensed multi-story tower teardown, high-reach mechanical felling, and precision wire sawing across Dubai. Governed by 24/7 seismic telemetry and 98% material recycling.',
    keywords:
      'building demolition dubai, high reach excavator felling, high rise deconstruction uae, commercial building teardown, structural wire sawing dubai',
    canonicalPath: '/#building-demolition',
    ogType: 'article',
    ogImage: '/images/hero_building_demolition_1791830585768.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: 'Building Demolition', path: '/#building-demolition' }
    ]
  },
  'industrial-demolition': {
    title: 'Industrial Demolition & Plant Dismantling | MSA Demolishing UAE',
    description:
      'Turnkey deconstruction of petrochemical refineries, cement silos, steel manufacturing plants, and heavy machinery across JAFZA, KIZAD, and UAE free zones.',
    keywords:
      'industrial demolition dubai, refinery dismantling uae, plant decommissioning, steel structure felling, silo demolition dubai, heavy industrial shear',
    canonicalPath: '/#industrial-demolition',
    ogType: 'article',
    ogImage: '/images/demolition_heavy_shear_1791756033650.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: 'Industrial Demolition', path: '/#industrial-demolition' }
    ]
  },
  'interior-stripout': {
    title: 'Commercial Interior Strip-Out & Architectural Soft-Strip | MSA Demolishing UAE',
    description:
      'Turnkey retail mall night shifts, corporate office defits, and MEP conduit strip-outs with zero dust migration and acoustic containment across Dubai and UAE.',
    keywords:
      'interior strip out dubai, office defit uae, retail mall soft strip, non load bearing wall removal, architectural demolition dubai',
    canonicalPath: '/#interior-stripout',
    ogType: 'article',
    ogImage: '/images/interior_stripout_demolition_1791759731027.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: 'Interior Strip-Out', path: '/#interior-stripout' }
    ]
  },
  'infrastructure-demolition': {
    title: 'Infrastructure & Bridge Demolition | MSA Demolishing UAE',
    description:
      'Civil highway viaduct deconstruction, elevated flyovers, marine wharves, and deep shoring removal executed under strict RTA and Dubai Police approvals.',
    keywords:
      'infrastructure demolition dubai, bridge demolition uae, viaduct deconstruction, hydro demolition uae, secant pile removal dubai',
    canonicalPath: '/#infrastructure-demolition',
    ogType: 'article',
    ogImage: '/images/dubai_flyover_viaduct_demolition_1791762226685.webp',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: 'Infrastructure Demolition', path: '/#infrastructure-demolition' }
    ]
  }
};

/**
 * Updates DOM on-page SEO meta elements dynamically to adhere to W3C standards
 * and search engine crawling requirements.
 */
export function applyPageSEO(pageKey: string) {
  if (typeof document === 'undefined') return;

  const seo = PAGES_SEO[pageKey] || PAGES_SEO['home'];
  const fullUrl = `${SITE_BASE_URL}${seo.canonicalPath}`;

  // 1. Update Document Title
  document.title = seo.title;

  // 2. Helper to set or create meta tag
  const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Core Meta Tags
  setMeta('name', 'description', seo.description);
  setMeta('name', 'keywords', seo.keywords);
  setMeta(
    'name',
    'robots',
    'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  );

  // 4. OpenGraph Tags
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:type', seo.ogType);
  setMeta('property', 'og:url', fullUrl);
  setMeta('property', 'og:image', `${SITE_BASE_URL}${seo.ogImage}`);
  setMeta('property', 'og:site_name', 'MSA Demolishing');
  setMeta('property', 'og:locale', 'en_US');

  // 5. Twitter Card Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', `${SITE_BASE_URL}${seo.ogImage}`);

  // 6. Canonical Link
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.rel = 'canonical';
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.href = fullUrl;

  // 7. Inject / Update Breadcrumb JSON-LD Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: seo.breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_BASE_URL}${crumb.path}`
    }))
  };

  let scriptEl = document.getElementById('schema-breadcrumbs') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'schema-breadcrumbs';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(breadcrumbSchema);
}

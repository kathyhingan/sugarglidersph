import { site } from '../data/site.js';

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

// Organization + WebSite are emitted on every page (sitewide identity).
export function orgAndWebsiteSchema() {
  const org = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.brand,
    url: site.url,
    description: site.tagline,
    telephone: site.phoneDisplay,
    areaServed: { '@type': 'Country', name: 'Philippines' },
    address: { '@type': 'PostalAddress', addressCountry: 'PH' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneDisplay,
      contactType: 'sales',
      areaServed: 'PH',
      availableLanguage: ['English', 'Filipino'],
    },
  };
  const sameAs = [site.instagram, site.facebook].filter(Boolean);
  if (sameAs.length) org.sameAs = sameAs;

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.brand,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-PH',
  };
  return [org, website];
}

// Article schema for care-guide content.
export function articleSchema({ title, description, canonical, datePublished, dateModified, author }) {
  return {
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: canonical,
    inLanguage: 'en-PH',
    author: { '@type': 'Person', name: author || site.author },
    publisher: { '@id': ORG_ID },
    datePublished: datePublished || '2026-06-25',
    dateModified: dateModified || datePublished || '2026-06-25',
  };
}

// FAQPage schema built from an array of {q, a}.
export function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// BreadcrumbList from [{name, path}].
export function breadcrumbSchema(crumbs) {
  if (!crumbs || !crumbs.length) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path ? new URL(c.path, site.url).href : undefined,
    })),
  };
}

// Build the full @graph for a page from its frontmatter-ish options.
export function buildGraph(opts = {}) {
  const graph = [...orgAndWebsiteSchema()];
  const types = opts.schema || [];

  if (types.includes('Article')) {
    graph.push(articleSchema(opts));
  }
  if (types.includes('FAQPage')) {
    const fq = faqSchema(opts.faqs);
    if (fq) graph.push(fq);
  }
  if (types.includes('BreadcrumbList')) {
    const bc = breadcrumbSchema(opts.breadcrumbs);
    if (bc) graph.push(bc);
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

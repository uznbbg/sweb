import type { Metadata } from 'next'

export const SITE = {
  name: 'CDA Sigorta',
  legalName: 'CDA Sigorta Aracılık Hizmetleri A.Ş.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cdasigorta.example',
  locale: 'tr_TR',
  twitter: '@cdasigorta',
  logo: '/images/og.webp',
  ogImage: '/images/og.webp',
  contact: {
    telephone: '+90-850-000-0000',
    email: 'destek@cdasigorta.example',
  },
  address: {
    streetAddress: 'Levent Mah. Büyükdere Cad. No:1',
    addressLocality: 'İstanbul',
    addressRegion: 'İstanbul',
    postalCode: '34330',
    addressCountry: 'TR',
  },
  social: [
    'https://twitter.com/cdasigorta',
    'https://www.linkedin.com/company/cdasigorta',
    'https://www.instagram.com/cdasigorta',
  ],
}

/** Build absolute URL from path. */
export function abs(path: string): string {
  if (path.startsWith('http')) return path
  return new URL(path, SITE.url).toString()
}

/**
 * Build per-page metadata with canonical + OG/Twitter alignment.
 * Inherits global defaults from app/layout.tsx where omitted.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
  keywords,
}: {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
  keywords?: string[]
}): Metadata {
  const url = abs(path)
  const img = image ?? SITE.ogImage
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

/* ---------------- JSON-LD generators ---------------- */

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs(SITE.logo),
    image: abs(SITE.ogImage),
    sameAs: SITE.social,
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SITE.contact.telephone,
        email: SITE.contact.email,
        areaServed: 'TR',
        availableLanguage: ['Turkish'],
      },
    ],
    areaServed: { '@type': 'Country', name: 'Türkiye' },
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'tr-TR',
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/arama?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
  category = 'Sigorta',
}: {
  name: string
  description: string
  path: string
  serviceType: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    category,
    url: abs(path),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    audience: { '@type': 'Audience', audienceType: 'Bireysel müşteriler' },
  }
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function howToLd({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

/** Inline component-free JSON-LD script payload. */
export function jsonLd(obj: object | object[]) {
  return { __html: JSON.stringify(obj).replace(/</g, '\\u003c') }
}

import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { FeatureSpotlight } from '@/components/sections/FeatureSpotlight'
import { Highlights } from '@/components/sections/Highlights'
import { QuoteTeaser } from '@/components/sections/QuoteTeaser'
import { Testimonial } from '@/components/sections/Testimonial'
import { Stats } from '@/components/sections/Stats'
import { CTABanner } from '@/components/sections/CTABanner'
import { SITE, abs, jsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    absolute: 'CDA Sigorta — Sağlık, Kasko, Konut ve Hayat Sigortası',
  },
  description:
    'Online sigorta teklifinizi 60 saniyede alın. Sağlık, kasko, konut, hayat, DASK, seyahat ve daha fazlası. Şeffaf fiyat, anında poliçe, 7/24 destek.',
  alternates: { canonical: SITE.url },
}

const PRODUCTS = [
  { name: 'Trafik Sigortası', path: '/teklif-al?urun=kasko' },
  { name: '2. El Trafik Sigortası', path: '/teklif-al?urun=kasko' },
  { name: 'Kasko', path: '/teklif-al?urun=kasko' },
  { name: 'İMM', path: '/teklif-al?urun=kasko' },
  { name: 'Yeşil Kart', path: '/teklif-al?urun=kasko' },
  { name: 'Özel Sağlık Sigortası', path: '/bireysel/saglik' },
  { name: 'Tamamlayıcı Sağlık Sigortası', path: '/bireysel/saglik' },
  { name: 'Seyahat Sağlık Sigortası', path: '/teklif-al?urun=saglik' },
  { name: 'Konut Sigortası', path: '/teklif-al?urun=konut' },
  { name: 'DASK', path: '/teklif-al?urun=konut' },
]

const homeLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    url: SITE.url,
    name: 'CDA Sigorta — Sağlık, Kasko, Konut ve Hayat Sigortası',
    inLanguage: 'tr-TR',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs('/images/og.webp') },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sigorta ürünleri',
    itemListElement: PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: abs(p.path),
    })),
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeLd)}
      />
      <Hero />
      <ProductGrid />
      <FeatureSpotlight />
      <Highlights />
      <QuoteTeaser />
      <Testimonial />
      <Stats />
      <CTABanner />
    </>
  )
}

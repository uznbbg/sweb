import type { Metadata } from 'next'
import { ProductHero } from '@/components/sections/ProductHero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Highlights } from '@/components/sections/Highlights'
import { Stats } from '@/components/sections/Stats'
import { Testimonial } from '@/components/sections/Testimonial'
import { CTABanner } from '@/components/sections/CTABanner'
import { IMAGE_META } from '@/lib/image-meta'
import { buildMetadata, breadcrumbLd, jsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Bireysel Sigorta — Size ve sevdiklerinize özel.',
  description:
    'Sağlık, kasko, konut, hayat, DASK, seyahat ve daha fazlası. Bireysel ihtiyaçlarınız için sade ve şeffaf koruma. Teklifinizi 60 saniyede alın.',
  path: '/bireysel',
  keywords: [
    'bireysel sigorta',
    'sağlık sigortası',
    'kasko',
    'konut sigortası',
    'hayat sigortası',
    'DASK',
    'sigorta teklifi',
  ],
})

const ld = breadcrumbLd([
  { name: 'Ana sayfa', path: '/' },
  { name: 'Bireysel', path: '/bireysel' },
])

export default function BireyselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />
      <ProductHero
        eyebrow="Bireysel"
        title="Size ve sevdiklerinize özel."
        subtitle="Sağlık, kasko, konut ve hayat — dört temel alanda sade, şeffaf koruma."
        primaryHref="/teklif-al"
        primaryLabel="Teklif al"
        secondaryHref="#urunler"
        secondaryLabel="Ürünleri gör"
        image={{
          src: '/images/hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.HERO.blurDataURL,
        }}
      />

      <div id="urunler">
        <ProductGrid />
      </div>

      <Highlights />
      <Stats />
      <Testimonial />
      <CTABanner />
    </>
  )
}

import type { Metadata } from 'next'
import { ProductHero } from '@/components/sections/ProductHero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Highlights } from '@/components/sections/Highlights'
import { Stats } from '@/components/sections/Stats'
import { Testimonial } from '@/components/sections/Testimonial'
import { CTABanner } from '@/components/sections/CTABanner'
import { IMAGE_META } from '@/lib/image-meta'

export const metadata: Metadata = {
  title: 'Bireysel — Size ve sevdiklerinize özel.',
  description:
    'Sağlık, kasko, konut ve hayat sigortası. Bireysel ihtiyaçlarınız için sade ve şeffaf koruma.',
}

export default function BireyselPage() {
  return (
    <>
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

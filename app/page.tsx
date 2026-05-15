import { Hero } from '@/components/sections/Hero'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { FeatureSpotlight } from '@/components/sections/FeatureSpotlight'
import { Highlights } from '@/components/sections/Highlights'
import { QuoteTeaser } from '@/components/sections/QuoteTeaser'
import { Testimonial } from '@/components/sections/Testimonial'
import { Stats } from '@/components/sections/Stats'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
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

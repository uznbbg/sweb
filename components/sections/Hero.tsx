import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { StaggerWords } from '@/components/motion/StaggerWords'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'

/**
 * Full-viewport hero. Server-rendered text + client-side stagger on the h1.
 * Hero image is rendered below the CTA links with `priority`.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-2.75rem)] bg-apple-offwhite overflow-hidden"
    >
      {/* Whisper-soft radial vignette behind text */}
      <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />

      <div className="relative mx-auto flex max-w-apple-wide flex-col items-center px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        {/* Eyebrow */}
        <FadeIn y={8}>
          <p className="text-[14px] md:text-[17px] font-medium text-apple-darkgray/90 tracking-[-0.005em]">
            CDA Sigorta
          </p>
        </FadeIn>

        {/* H1 with staggered word reveal */}
        <h1
          id="hero-title"
          className="mt-3 max-w-[14ch] text-center text-[56px] sm:text-[72px] md:text-[80px] lg:text-[96px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray"
        >
          <StaggerWords text="Güvende olmak, hiç bu kadar sade olmamıştı." />
        </h1>

        {/* Subhead */}
        <FadeIn delay={0.6}>
          <p className="mt-6 max-w-[44ch] text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal leading-[1.3] text-apple-darkgray">
            Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı.
          </p>
        </FadeIn>

        {/* Inline blue CTA links */}
        <FadeIn delay={0.7}>
          <div className="mt-7 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <Link
              href="/teklif-al"
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
            >
              Teklif al
              <ChevronRight
                className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
            <Link
              href="/bireysel"
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
            >
              Daha fazla bilgi
              <ChevronRight
                className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </FadeIn>

        {/* Hero image — priority */}
        <FadeIn delay={0.3} y={32}>
          <div className="mt-14 md:mt-20 w-full max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[12/7] overflow-hidden rounded-apple-tile bg-apple-lightgray">
              <Image
                src="/images/hero.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL={IMAGE_META.HERO.blurDataURL}
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

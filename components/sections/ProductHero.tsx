import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerWords } from '@/components/motion/StaggerWords'

type ProductHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
  image: { src: string; alt: string; blurDataURL: string }
}

/**
 * Reusable hero for product detail pages. Same typographic rhythm as
 * the homepage Hero, but with a configurable eyebrow.
 */
export function ProductHero({
  eyebrow,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image,
}: ProductHeroProps) {
  return (
    <section
      aria-labelledby="product-hero-title"
      className="relative bg-apple-offwhite overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />

      <div className="relative mx-auto flex max-w-apple-wide flex-col items-center px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <FadeIn y={8}>
          <p className="text-[14px] md:text-[17px] font-medium text-apple-darkgray/90 tracking-[-0.005em]">
            {eyebrow}
          </p>
        </FadeIn>

        <h1
          id="product-hero-title"
          className="mt-3 max-w-[16ch] text-center text-[48px] sm:text-[64px] md:text-[80px] lg:text-[88px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray"
        >
          <StaggerWords text={title} />
        </h1>

        <FadeIn delay={0.6}>
          <p className="mt-6 max-w-[44ch] text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-normal leading-[1.3] text-apple-darkgray">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-7 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
            >
              {primaryLabel}
              <ChevronRight
                className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
            <Link
              href={secondaryHref}
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
            >
              {secondaryLabel}
              <ChevronRight
                className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={32}>
          <div className="mt-14 md:mt-20 w-full max-w-[1100px] mx-auto">
            <div className="relative w-full aspect-[12/7] overflow-hidden rounded-apple-tile bg-apple-lightgray">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { FadeIn } from '@/components/motion/FadeIn'

export function CTABanner() {
  return (
    <section
      aria-labelledby="cta-banner-title"
      className="bg-apple-lightgray"
    >
      <div className="mx-auto max-w-apple px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <h2
            id="cta-banner-title"
            className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray"
          >
            Bugün başlayın.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 mx-auto max-w-[44ch] text-[20px] md:text-[22px] leading-[1.3] text-apple-darkgray/75">
            Sade, hızlı ve şeffaf. Birkaç dakika içinde poliçeniz hazır.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-9">
            <Link
              href="/teklif-al"
              className="inline-flex h-12 items-center justify-center rounded-apple-pill bg-apple-blue px-8 text-[17px] font-medium text-white transition-colors duration-200 ease-apple hover:bg-apple-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-lightgray"
            >
              Teklif al
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

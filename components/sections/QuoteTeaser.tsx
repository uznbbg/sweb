import { FadeIn } from '@/components/motion/FadeIn'
import { QuoteTeaserForm } from '@/components/sections/QuoteTeaserForm'

export function QuoteTeaser() {
  return (
    <section
      aria-labelledby="quote-teaser-title"
      className="bg-apple-offwhite"
    >
      <div className="mx-auto max-w-apple px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <h2
            id="quote-teaser-title"
            className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray"
          >
            Teklifinizi 60 saniyede alın.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 mx-auto max-w-[44ch] text-[20px] md:text-[22px] leading-[1.3] text-apple-darkgray/75">
            Plakanızı veya TC numaranızı girin, gerisini biz halledelim.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-9">
            <QuoteTeaserForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-[12px] text-apple-midgray">
            Bilgileriniz KVKK kapsamında korunur. Hiçbir koşulda paylaşılmaz.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

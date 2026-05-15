import { FadeIn } from '@/components/motion/FadeIn'

/**
 * Single centered quote, 32px italic, no card.
 * Author in mid-gray 14px below.
 */
export function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="bg-apple-offwhite"
    >
      <div className="mx-auto max-w-apple px-6 py-28 md:py-36">
        <h2 id="testimonial-title" className="sr-only">
          Müşteri yorumu
        </h2>

        <figure className="text-center">
          <FadeIn>
            <blockquote className="text-[26px] sm:text-[30px] md:text-[32px] font-normal italic leading-[1.4] tracking-[-0.005em] text-apple-darkgray">
              “Hasar bildirimi sabah saat 9’daydı, öğleden önce paramı aldım.
              Sigortanın bu kadar sade olabileceğini bilmiyordum.”
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.15}>
            <figcaption className="mt-8 text-[14px] not-italic text-apple-midgray">
              <span className="text-apple-darkgray font-medium">Elif K.</span>
              <span aria-hidden className="mx-2">·</span>
              <span>Sağlık poliçesi sahibi</span>
            </figcaption>
          </FadeIn>
        </figure>
      </div>
    </section>
  )
}

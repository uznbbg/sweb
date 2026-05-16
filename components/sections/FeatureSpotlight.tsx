import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'

/**
 * Three alternating full-bleed spotlight panels.
 * A — black, centered ("Hasar süreci, dakikalar içinde.")
 * B — offwhite, centered ("Şeffaf fiyat, gizli ücret yok.")
 * C — black, centered ("7/24 destek, gerçek insanlar.")
 */
export function FeatureSpotlight() {
  return (
    <>
      <PanelA />
      <PanelB />
      <PanelC />
    </>
  )
}

/* ---------- Panel A — black, centered ---------- */
function PanelA() {
  return (
    <section
      aria-labelledby="spotlight-a-title"
      className="relative min-h-[700px] bg-apple-black text-white"
    >
      <div className="mx-auto flex min-h-[700px] max-w-apple-wide flex-col items-center justify-center px-6 py-[120px] text-center">
        <FadeIn>
          <p className="text-[14px] md:text-[17px] font-medium text-white/70 tracking-[-0.005em]">
            Hasar
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            id="spotlight-a-title"
            className="mt-3 max-w-[18ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em]"
          >
            Hasar süreci, dakikalar içinde.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-white/75">
            Fotoğraf çekin, gönderin, onay alın. Ödemeniz aynı gün hesabınızda.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <SpotlightLink href="/hasar/bildir" label="Hasar bildir" />
            <SpotlightLink href="/hasar" label="Süreç nasıl işler" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ---------- Panel B — offwhite, centered ---------- */
function PanelB() {
  return (
    <section
      aria-labelledby="spotlight-b-title"
      className="relative min-h-[700px] bg-apple-offwhite text-apple-darkgray overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
      <div className="relative mx-auto flex min-h-[700px] max-w-apple-wide flex-col items-center justify-center px-6 py-[120px] text-center">
        <FadeIn>
          <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray tracking-[-0.005em]">
            Fiyat
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            id="spotlight-b-title"
            className="mt-3 max-w-[18ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em]"
          >
            Şeffaf fiyat, gizli ücret yok.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-apple-darkgray/80">
            Hangi koruma için ne ödediğinizi en baştan görürsünüz. Sürpriz
            kalem yok, dipnot yok.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <SpotlightLink href="/teklif-al" label="Teklif al" />
            <SpotlightLink href="/bireysel" label="Ürünleri karşılaştır" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ---------- Panel C — black, centered ---------- */
function PanelC() {
  return (
    <section
      aria-labelledby="spotlight-c-title"
      className="relative min-h-[700px] bg-apple-black text-white"
    >
      <div className="mx-auto flex min-h-[700px] max-w-apple-wide flex-col items-center justify-center px-6 py-[120px] text-center">
        <FadeIn>
          <p className="text-[14px] md:text-[17px] font-medium text-white/70 tracking-[-0.005em]">
            Destek
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            id="spotlight-c-title"
            className="mt-3 max-w-[18ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em]"
          >
            7/24 destek, gerçek insanlar.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-white/75">
            Bir saniye bile beklemeden bağlanın. Her arama, anlayan bir uzmanla.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <SpotlightLink href="/destek" label="Yardım merkezi" />
            <SpotlightLink href="/destek/iletisim" label="Bize ulaşın" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ---------- Inline link with chevron ---------- */
function SpotlightLink({
  href,
  label,
  tone = 'light',
}: {
  href: string
  label: string
  tone?: 'light' | 'blue'
}) {
  // On dark panels Apple uses bright blue at full saturation;
  // on light panels we use the same blue (still per palette).
  void tone
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
    >
      {label}
      <ChevronRight
        className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </Link>
  )
}

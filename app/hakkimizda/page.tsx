import type { Metadata } from 'next'
import Image from 'next/image'
import { Sparkles, Shield, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ProductHero } from '@/components/sections/ProductHero'
import { Stats } from '@/components/sections/Stats'
import { CTABanner } from '@/components/sections/CTABanner'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'

export const metadata: Metadata = {
  title: 'Hakkımızda — Sigortayı yeniden tasarladık.',
  description:
    '25 yıllık tecrübe, 2 milyondan fazla müşteri. CDA Sigorta, koruma anlayışını sade ve şeffaf hâle getirir.',
}

const VALUES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: 'Sade.',
    body:
      'Karmaşık şartlar değil, anlaşılır kapsam. Her poliçeyi tek bir cümlede açıklayabiliyoruz.',
  },
  {
    icon: Shield,
    title: 'Şeffaf.',
    body:
      'Gizli ücret yok, ek bedel yok. Ödediğiniz, baştan gördüğünüzle aynıdır.',
  },
  {
    icon: Users,
    title: 'İnsan odaklı.',
    body:
      'Bot değil, uzman ekipler. Her aramada, her hasar dosyasında gerçek bir muhatap.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <ProductHero
        eyebrow="Hakkımızda"
        title="Sigortayı yeniden tasarladık."
        subtitle="Çünkü insanların ödediği şeyi tam olarak ne aldığını bilmesi gerektiğine inanıyoruz."
        primaryHref="/kariyer"
        primaryLabel="Bize katılın"
        secondaryHref="#degerler"
        secondaryLabel="Değerlerimiz"
        image={{
          src: '/images/hakkimizda-hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.HAKKIMIZDA_HERO.blurDataURL,
        }}
      />

      {/* Story — two column */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <div className="md:pr-8">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Hikâyemiz
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 max-w-[18ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                25 yılda iki milyon ailenin yanında.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-apple-darkgray/80">
                1999’da küçük bir ekiple başladık. Bugün 25 yılda iki milyondan
                fazla aileyi korurken aynı sade dilimizi koruyoruz: gizli madde
                yok, küçük yazı yok, sürpriz yok.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-apple-tile bg-apple-lightgray">
              <Image
                src="/images/hakkimizda-story.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={IMAGE_META.HAKKIMIZDA_STORY.blurDataURL}
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section id="degerler" className="bg-apple-offwhite">
        <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
          <div className="mb-12 text-center md:mb-16">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Değerlerimiz
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 mx-auto max-w-[22ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                Üç ilke, hiç değişmedi.
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {VALUES.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="flex flex-col">
                  <Icon
                    className="h-6 w-6 text-apple-darkgray"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-apple-darkgray">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-[17px] leading-[1.47] text-apple-darkgray/75">
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

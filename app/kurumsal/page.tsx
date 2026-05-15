import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Building2, Users, Truck, Briefcase } from 'lucide-react'
import { ProductHero } from '@/components/sections/ProductHero'
import { Stats } from '@/components/sections/Stats'
import { CTABanner } from '@/components/sections/CTABanner'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'

export const metadata: Metadata = {
  title: 'Kurumsal — Şirketinizi koruyan paketler.',
  description:
    'KOBİ’den büyük ölçeğe, şirketinizin ihtiyaçlarına göre tasarlanmış sigorta çözümleri.',
}

const SOLUTIONS = [
  {
    icon: Building2,
    title: 'İş yeri sigortası',
    body:
      'Yangın, hırsızlık, doğal afet ve iş kesintisi risklerine karşı kapsamlı koruma.',
    href: '/kurumsal/is-yeri',
  },
  {
    icon: Users,
    title: 'Grup sağlık',
    body:
      'Çalışanlarınız için esnek planlar. Tek bir panelden tüm ekipleri yönetin.',
    href: '/kurumsal/grup-saglik',
  },
  {
    icon: Truck,
    title: 'Filo kasko',
    body:
      'Şirket araçlarınız için tek poliçe, tek fatura, tek muhatap. Kapsamlı yol yardımı dahil.',
    href: '/kurumsal/filo',
  },
  {
    icon: Briefcase,
    title: 'Sorumluluk sigortası',
    body:
      'Mesleki ve işveren sorumluluğu risklerine karşı şirketinizi finansal olarak güvenceye alın.',
    href: '/kurumsal/sorumluluk',
  },
]

export default function KurumsalPage() {
  return (
    <>
      <ProductHero
        eyebrow="Kurumsal"
        title="Şirketinize odaklanın. Korumayı bize bırakın."
        subtitle="KOBİ’den büyük ölçeğe, her şirketin ihtiyacına uygun sigorta çözümleri."
        primaryHref="/teklif-al?segment=kurumsal"
        primaryLabel="Kurumsal teklif al"
        secondaryHref="#cozumler"
        secondaryLabel="Çözümleri incele"
        image={{
          src: '/images/kurumsal-hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.KURUMSAL_HERO.blurDataURL,
        }}
      />

      {/* Solutions grid */}
      <section id="cozumler" className="bg-apple-lightgray">
        <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
          <div className="mb-12 text-center md:mb-16">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Çözümler
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 mx-auto max-w-[22ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                Her ölçekte şirket için.
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {SOLUTIONS.map(({ icon: Icon, title, body, href }, i) => (
              <FadeIn key={title} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-apple-tile bg-white p-8 md:p-10">
                  <Icon
                    className="h-6 w-6 text-apple-darkgray"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 text-[24px] md:text-[28px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 max-w-[42ch] text-[15px] md:text-[17px] leading-[1.47] text-apple-darkgray/75">
                    {body}
                  </p>
                  <Link
                    href={href}
                    className="group mt-8 inline-flex items-center gap-0.5 text-[15px] text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
                  >
                    Daha fazla
                    <ChevronRight
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column feature */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <div className="md:pr-8">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Yönetim paneli
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 max-w-[16ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                Tüm poliçeleriniz tek bir yerde.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-apple-darkgray/80">
                Çalışan ekleyin, hasar takip edin, raporlar alın. Tüm kurumsal
                süreçler tek bir panelden.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-apple-tile bg-apple-lightgray">
              <Image
                src="/images/kurumsal-feature.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={IMAGE_META.KURUMSAL_FEATURE.blurDataURL}
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Stats />
      <CTABanner />
    </>
  )
}

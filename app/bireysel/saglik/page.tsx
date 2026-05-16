import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ProductHero } from '@/components/sections/ProductHero'
import { Highlights } from '@/components/sections/Highlights'
import { PlanTiles, type Plan } from '@/components/sections/PlanTiles'
import { FAQ, type FAQItem } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'
import {
  SITE,
  abs,
  buildMetadata,
  serviceLd,
  faqLd,
  breadcrumbLd,
  jsonLd,
} from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sağlık Sigortası — Doktorun bir tık uzağında.',
  description:
    'Özel hastanelerde anlaşmalı 1500+ kadro, online muayene ve hızlı geri ödeme. Temel, Konfor ve Premier planlarıyla CDA Sağlık Sigortası teklifinizi 60 saniyede alın.',
  path: '/bireysel/saglik',
  image: '/images/saglik-hero.webp',
  keywords: [
    'sağlık sigortası',
    'özel sağlık sigortası',
    'tamamlayıcı sağlık sigortası',
    'TSS',
    'aile sağlık sigortası',
    'online sağlık sigortası teklifi',
    'CDA Sağlık',
  ],
})

const PLANS: Plan[] = [
  {
    name: 'Temel',
    price: '₺349',
    cadence: '/ay',
    description: 'Sade ihtiyaçlar için temel koruma.',
    features: [
      'Anlaşmalı 600+ hastane',
      'Yıllık 5 muayene',
      '%80 ilaç katılımı',
      'Online doktor erişimi',
    ],
    href: '/teklif-al?urun=saglik&plan=temel',
  },
  {
    name: 'Konfor',
    price: '₺549',
    cadence: '/ay',
    description: 'Aileler için dengeli kapsam.',
    features: [
      'Anlaşmalı 1500+ hastane',
      'Sınırsız muayene',
      '%90 ilaç katılımı',
      'Tıbbi tetkik ve ameliyat',
      'Diş ve göz paketi',
    ],
    href: '/teklif-al?urun=saglik&plan=konfor',
    featured: true,
  },
  {
    name: 'Premier',
    price: '₺899',
    cadence: '/ay',
    description: 'Üst düzey beklentiler için.',
    features: [
      'Yurt içi ve yurt dışı kapsam',
      'VIP hastane erişimi',
      '%100 ilaç katılımı',
      'Check-up programı',
      'Tıbbi seyahat asistansı',
      '7/24 özel danışman',
    ],
    href: '/teklif-al?urun=saglik&plan=premier',
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Poliçe ne kadar sürede başlar?',
    answer:
      'Ödemeniz onaylandıktan sonra dakikalar içinde poliçeniz aktif olur. Belgeler e-posta adresinize iletilir, ayrıca uygulama içinden de erişebilirsiniz.',
  },
  {
    question: 'Önceden var olan rahatsızlıklar kapsama dahil mi?',
    answer:
      'Başvuru sırasında beyan ettiğiniz rahatsızlıklar için bekleme süresi uygulanabilir. Detaylar planınızın özel şartlarına göre değişir; danışmanlarımız net bir açıklama sağlar.',
  },
  {
    question: 'Hangi hastaneler anlaşmalı?',
    answer:
      'Türkiye genelinde 1500’ün üzerinde özel hastane ve klinikle anlaşmamız var. Tam liste uygulama içinden ve web sitemizden güncel olarak takip edilebilir.',
  },
  {
    question: 'Hasar veya tazminat süreci nasıl işliyor?',
    answer:
      'Uygulama üzerinden birkaç adımda hasar bildiriminizi iletebilirsiniz. Ekibimiz aynı gün geri dönüş yapar; çoğu durumda ödeme 24 saat içinde tamamlanır.',
  },
  {
    question: 'Poliçemi istediğim zaman iptal edebilir miyim?',
    answer:
      'Evet. Cayma hakkınızı kullanarak ilk 14 gün içinde tam iadeli iptal yapabilirsiniz. Sonrasında pro-rata iade kuralları geçerlidir.',
  },
]

const saglikLd = [
  breadcrumbLd([
    { name: 'Ana sayfa', path: '/' },
    { name: 'Bireysel', path: '/bireysel' },
    { name: 'Sağlık', path: '/bireysel/saglik' },
  ]),
  serviceLd({
    name: 'CDA Sağlık Sigortası',
    description:
      'Özel sağlık ve tamamlayıcı sağlık sigortası — anlaşmalı 1500+ hastane, sınırsız muayene, ilaç katılımı, online doktor erişimi.',
    path: '/bireysel/saglik',
    serviceType: 'Sağlık Sigortası',
  }),
  faqLd(
    FAQ_ITEMS.map((it) => ({ q: it.question, a: it.answer })),
  ),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sağlık planları',
    itemListElement: PLANS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Offer',
        name: `${p.name} plan`,
        price: p.price.replace(/[^0-9]/g, ''),
        priceCurrency: 'TRY',
        url: abs(p.href),
        availability: 'https://schema.org/InStock',
        eligibleRegion: { '@type': 'Country', name: 'Türkiye' },
        seller: { '@id': `${SITE.url}/#organization` },
      },
    })),
  },
]

export default function SaglikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(saglikLd)}
      />
      <ProductHero
        eyebrow="Sağlık"
        title="Doktorun bir tık uzağında."
        subtitle="Anlaşmalı hastaneler, online muayene ve hızlı geri ödeme — hepsi tek bir poliçede."
        primaryHref="/teklif-al?urun=saglik"
        primaryLabel="Teklif al"
        secondaryHref="#planlar"
        secondaryLabel="Planları gör"
        image={{
          src: '/images/saglik-hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.SAGLIK_HERO.blurDataURL,
        }}
      />

      {/* Feature spotlight — 2 column */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <div className="md:pr-8">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Anlaşmalı ağ
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 max-w-[16ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                1500+ özel hastane, tek poliçe.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-[44ch] text-[20px] md:text-[24px] leading-[1.3] text-apple-darkgray/80">
                Türkiye’nin önde gelen özel hastaneleri ve klinikleriyle
                anlaşmalı kadrolarımız sayesinde tedaviye anında ulaşırsınız.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col items-start gap-x-7 gap-y-3 sm:flex-row text-[17px]">
                <Link
                  href="/bireysel/saglik/hastaneler"
                  className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
                >
                  Anlaşmalı kurumlar
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} y={32}>
            <div className="relative mx-auto w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-apple-tile bg-apple-lightgray">
              <Image
                src="/images/saglik-feature.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={IMAGE_META.SAGLIK_FEATURE.blurDataURL}
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Highlights />

      <div id="planlar">
        <PlanTiles
          eyebrow="Planlar"
          title="Size uygun olanı seçin."
          plans={PLANS}
        />
      </div>

      <FAQ title="Sıkça sorulanlar." items={FAQ_ITEMS} />

      <CTABanner />
    </>
  )
}

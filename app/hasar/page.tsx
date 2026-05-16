import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ProductHero } from '@/components/sections/ProductHero'
import { Steps } from '@/components/sections/Steps'
import { Highlights } from '@/components/sections/Highlights'
import { FAQ, type FAQItem } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'
import { buildMetadata, breadcrumbLd, jsonLd, abs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Hasar — Dakikalar İçinde Çözülen Süreç',
  description:
    'Hasar bildirimi, takip ve ödeme süreci CDA Sigorta ile sade ve hızlı. Fotoğraf gönderin, onay alın, aynı gün ödeme alın.',
  path: '/hasar',
  keywords: ['hasar bildirimi', 'hasar süreci', 'kasko hasar', 'sigorta hasar takip'],
})

const ld = [
  breadcrumbLd([
    { name: 'Ana sayfa', path: '/' },
    { name: 'Hasar', path: '/hasar' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Hasar bildirimi nasıl yapılır?',
    description:
      'CDA Sigorta üzerinden hasar bildirimi üç adımda tamamlanır: bildirin, doğrulayın, ödeme alın.',
    totalTime: 'PT10M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Bildirin', text: 'Uygulamadan veya web sitesinden bildirim formunu doldurun.', url: abs('/hasar/bildir') },
      { '@type': 'HowToStep', position: 2, name: 'Doğrulayın', text: 'Fotoğraf veya belge yükleyin; ekibimiz hızlıca inceler.' },
      { '@type': 'HowToStep', position: 3, name: 'Ödemeyi alın', text: 'Onaylanan hasarlarda ödemeniz aynı gün hesabınıza geçer.' },
    ],
  },
]

const STEPS = [
  {
    title: 'Bildirin.',
    body:
      'Uygulamadan birkaç fotoğraf yükleyin. Olay yerinden formu doldurmak yeterli.',
  },
  {
    title: 'Onay alın.',
    body:
      'Ekibimiz dakikalar içinde geri döner. Çoğu durumda ek belge istenmez.',
  },
  {
    title: 'Paranızı alın.',
    body:
      'Onayın ardından ödemeniz aynı gün banka hesabınıza iletilir.',
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Hasar bildirimi için ne kadar süreniz var?',
    answer:
      'Genel kural: olayın gerçekleştiği tarihten itibaren 5 iş günü içinde bildirim yapmanız önerilir. Acil durumlarda telefon hattımız 7/24 açıktır.',
  },
  {
    question: 'Hangi belgelere ihtiyacım var?',
    answer:
      'Kaza durumunda tutanak veya alkol raporu, sağlık durumunda ilgili rapor ve faturalar yeterlidir. Uygulama üzerinden fotoğrafla yükleyebilirsiniz.',
  },
  {
    question: 'Ödeme ne kadar sürede yapılır?',
    answer:
      'Belgeleriniz tamamlandıktan sonra çoğu hasar 24 saat içinde sonuçlandırılır. Karmaşık vakalarda süreç uzayabilir; bu durumda size düzenli bilgi verilir.',
  },
  {
    question: 'Hasar geçmişim primlerimi etkiler mi?',
    answer:
      'Trafik ve kasko poliçelerinde hasar geçmişi yenileme primini etkileyebilir. Sağlık ve konutta bireysel değerlendirme yapılır.',
  },
]

export default function HasarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />
      <ProductHero
        eyebrow="Hasar"
        title="Hasar süreci, dakikalar içinde."
        subtitle="Fotoğraf çekin, gönderin, onay alın. Ödemeniz aynı gün hesabınızda."
        primaryHref="/hasar/bildir"
        primaryLabel="Hasar bildir"
        secondaryHref="#sureç"
        secondaryLabel="Süreç nasıl işler"
        image={{
          src: '/images/hasar-hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.HASAR_HERO.blurDataURL,
        }}
      />

      <div id="sureç">
        <Steps
          eyebrow="Süreç"
          title="Üç adımda, başka hiçbir şey yapmadan."
          steps={STEPS}
          tone="offwhite"
        />
      </div>

      {/* Acil hat callout — black panel */}
      <section className="bg-apple-black text-white">
        <div className="mx-auto max-w-apple px-6 py-24 md:py-32 text-center">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-white/70">
              Acil durum
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-3 max-w-[20ch] mx-auto text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em]">
              Hattımız 7/24 açık.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-[44ch] mx-auto text-[20px] md:text-[24px] leading-[1.3] text-white/75">
              Acil bir durumda bir saniye bile beklemeyin. Bir uzman doğrudan
              bağlanır.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row sm:justify-center text-[17px]">
              <Link
                href="tel:08500000000"
                className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
              >
                0850 000 00 00
                <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
              <Link
                href="/hasar/takip"
                className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
              >
                Hasar takibi
                <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Highlights />
      <FAQ title="Sıkça sorulanlar." items={FAQ_ITEMS} />
      <CTABanner />
    </>
  )
}

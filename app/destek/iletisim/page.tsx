import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { ContactForm } from './ContactForm'
import { SITE, buildMetadata, breadcrumbLd, jsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'İletişim — Bize Ulaşın',
  description:
    'CDA Sigorta destek ekibine yazın, arayın veya merkezimizi ziyaret edin. 7/24 telefon hattı, aynı iş günü içinde geri dönüş.',
  path: '/destek/iletisim',
  keywords: ['iletişim', 'sigorta iletişim', 'CDA Sigorta destek', 'müşteri hizmetleri'],
})

const ld = [
  breadcrumbLd([
    { name: 'Ana sayfa', path: '/' },
    { name: 'Destek', path: '/destek' },
    { name: 'İletişim', path: '/destek/iletisim' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'CDA Sigorta İletişim',
    url: `${SITE.url}/destek/iletisim`,
    mainEntity: { '@id': `${SITE.url}/#organization` },
  },
]

const CHANNELS = [
  {
    icon: Phone,
    title: 'Telefon',
    body: '7/24 destek hattı.',
    value: '0850 000 00 00',
    href: 'tel:08500000000',
  },
  {
    icon: Mail,
    title: 'E-posta',
    body: 'Aynı iş günü içinde geri dönüş.',
    value: 'destek@cdasigorta.com',
    href: 'mailto:destek@cdasigorta.com',
  },
  {
    icon: MapPin,
    title: 'Merkez',
    body: 'Hafta içi 09:00 – 18:00.',
    value: 'Levent, İstanbul',
    href: '#',
  },
]

export default function IletisimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />
      {/* Compact hero */}
      <section className="relative bg-apple-offwhite overflow-hidden">
        <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
        <div className="relative mx-auto max-w-apple px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
              İletişim
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-3 max-w-[18ch] mx-auto text-[40px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
              Bize ulaşın.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-[52ch] text-[18px] md:text-[20px] leading-[1.45] text-apple-darkgray/75">
              Yazın, arayın veya merkezimize uğrayın. Her zaman gerçek bir
              insan yanıtlar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + channels rail */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16 md:px-8 md:py-24">
          <div className="max-w-[640px]">
            <FadeIn>
              <ContactForm />
            </FadeIn>
          </div>

          <aside className="md:sticky md:top-20 self-start space-y-4">
            {CHANNELS.map(({ icon: Icon, title, body, value, href }, i) => (
              <FadeIn key={title} delay={0.05 * (i + 1)}>
                <a
                  href={href}
                  className="group flex flex-col rounded-apple-card border border-apple-midgray/15 bg-white p-6 transition-shadow duration-300 ease-apple hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                >
                  <Icon
                    className="h-5 w-5 text-apple-darkgray"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-[14px] font-semibold tracking-[-0.005em] text-apple-darkgray">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] text-apple-midgray">
                    {body}
                  </p>
                  <span className="mt-3 text-[17px] font-medium text-apple-blue group-hover:text-apple-blue-hover transition-colors duration-200 ease-apple">
                    {value}
                  </span>
                </a>
              </FadeIn>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}

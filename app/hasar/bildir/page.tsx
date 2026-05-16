import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { FadeIn } from '@/components/motion/FadeIn'
import { ClaimForm } from './ClaimForm'
import { buildMetadata, breadcrumbLd, jsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Hasar Bildir — Online Hasar Bildirimi',
  description:
    'Hasar bildiriminizi birkaç adımda online iletin. Fotoğraf yükleyin, dakikalar içinde dosyanız açılsın, aynı gün geri dönüş alın.',
  path: '/hasar/bildir',
  keywords: ['hasar bildirimi', 'online hasar', 'hasar dosyası aç', 'kasko hasar bildir'],
})

const ld = breadcrumbLd([
  { name: 'Ana sayfa', path: '/' },
  { name: 'Hasar', path: '/hasar' },
  { name: 'Bildirim', path: '/hasar/bildir' },
])

export default function HasarBildirPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />
      {/* Compact hero */}
      <section className="relative bg-apple-offwhite overflow-hidden">
        <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
        <div className="relative mx-auto max-w-apple px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
              Hasar
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-3 max-w-[18ch] mx-auto text-[40px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
              Hasar bildir.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-[52ch] text-[18px] md:text-[20px] leading-[1.45] text-apple-darkgray/75">
              Formu doldurun, dosyanız dakikalar içinde açılsın. Acil
              durumlarda 7/24 hattımız her zaman daha hızlıdır.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + helper rail */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16 md:px-8 md:py-24">
          <div className="max-w-[640px]">
            <FadeIn>
              <ClaimForm />
            </FadeIn>
          </div>

          <aside className="md:sticky md:top-20 self-start">
            <FadeIn delay={0.1}>
              <div className="rounded-apple-card bg-white p-6 md:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-apple-lightgray text-apple-darkgray">
                  <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                </div>
                <h2 className="mt-5 text-[20px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                  Acil mi?
                </h2>
                <p className="mt-3 text-[15px] leading-[1.5] text-apple-darkgray/75">
                  Sağlık veya yol yardımı gerektiren acil durumlarda 7/24
                  destek hattımızı arayın.
                </p>
                <Link
                  href="tel:08500000000"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-apple-pill bg-apple-darkgray px-5 text-[14px] font-medium text-white hover:bg-apple-black transition-colors duration-200 ease-apple"
                >
                  0850 000 00 00
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 rounded-apple-card bg-apple-lightgray p-6 md:p-7">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-apple-darkgray">
                  Sonraki adım
                </h3>
                <ol className="mt-4 flex flex-col gap-3 text-[14px] leading-[1.5] text-apple-darkgray/80">
                  <li>1. Formu gönderin.</li>
                  <li>2. Takip ekranından fotoğraf yükleyin.</li>
                  <li>3. Onayı bekleyin — genelde aynı gün.</li>
                </ol>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>
    </>
  )
}

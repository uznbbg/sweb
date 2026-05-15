import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ShieldCheck, Clock, Lock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'
import { QuoteFlow } from './QuoteFlow'

export const metadata: Metadata = {
  title: 'Teklif Al',
  description:
    'Birkaç adımda kişisel teklifinizi alın. Sade form, gizli ücret yok, dakikalar içinde poliçe.',
}

const REASSURANCES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Clock,
    title: '60 saniyede teklif',
    body: 'Tek ekran, dört alan. Gerisini biz yapıyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Bağlayıcı değil',
    body: 'Teklif almak ücretsizdir; satın almak zorunda değilsiniz.',
  },
  {
    icon: Lock,
    title: 'KVKK güvencesi',
    body: 'Verileriniz yalnızca hesaplama için kullanılır, satılmaz.',
  },
]

export default function TeklifAlPage() {
  return (
    <>
      {/* Compact hero */}
      <section className="relative bg-apple-offwhite overflow-hidden">
        <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
        <div className="relative mx-auto max-w-apple px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
              Teklif
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-3 max-w-[18ch] mx-auto text-[40px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
              Teklifinizi 60 saniyede alın.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-[52ch] text-[18px] md:text-[20px] leading-[1.45] text-apple-darkgray/75">
              Birkaç temel bilgi yeterli. Hesaplama dakikalar içinde tamamlanır,
              satın almak zorunda değilsiniz.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + reassurance rail */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[minmax(0,1fr)_300px] md:gap-16 md:px-8 md:py-24">
          <div className="max-w-[640px]">
            <FadeIn>
              <Suspense
                fallback={
                  <div className="h-[480px] w-full rounded-apple-card bg-white/40" />
                }
              >
                <QuoteFlow />
              </Suspense>
            </FadeIn>
          </div>

          <aside className="md:sticky md:top-20 self-start space-y-4">
            {REASSURANCES.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={0.05 * (i + 1)}>
                <div className="rounded-apple-card border border-apple-midgray/15 bg-white p-6">
                  <Icon
                    className="h-5 w-5 text-apple-darkgray"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h2 className="mt-4 text-[14px] font-semibold tracking-[-0.005em] text-apple-darkgray">
                    {title}
                  </h2>
                  <p className="mt-2 text-[13px] leading-[1.5] text-apple-midgray">
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}

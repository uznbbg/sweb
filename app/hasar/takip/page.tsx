import type { Metadata } from 'next'
import { Suspense } from 'react'
import { FadeIn } from '@/components/motion/FadeIn'
import { TrackForm } from './TrackForm'

export const metadata: Metadata = {
  title: 'Hasar Takibi',
  description:
    'Dosya numaranızı girin, hasar sürecinizi adım adım takip edin.',
}

export default function HasarTakipPage() {
  return (
    <>
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
              Hasar takibi.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-[52ch] text-[18px] md:text-[20px] leading-[1.45] text-apple-darkgray/75">
              Dosya numaranızı girin, sürecin her adımını gerçek zamanlı
              olarak görün.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lookup + timeline */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto max-w-apple-wide px-6 py-16 md:px-8 md:py-24">
          <FadeIn>
            <Suspense
              fallback={
                <div className="mx-auto h-14 w-full max-w-[560px] rounded-apple-pill bg-white" />
              }
            >
              <TrackForm />
            </Suspense>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

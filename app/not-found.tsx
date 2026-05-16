import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'

export const metadata: Metadata = {
  title: 'Sayfa bulunamadı',
  description: 'Aradığınız sayfa taşınmış veya kaldırılmış olabilir.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-2.75rem)] bg-apple-offwhite overflow-hidden">
      <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
      <div className="relative mx-auto flex max-w-apple flex-col items-center justify-center px-6 py-32 text-center min-h-[calc(100vh-2.75rem)]">
        <FadeIn>
          <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
            404
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-3 max-w-[16ch] text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
            Aradığınız sayfayı bulamadık.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-[48ch] text-[18px] md:text-[22px] leading-[1.45] text-apple-darkgray/75">
            Link bozulmuş ya da sayfa taşınmış olabilir. Aşağıdaki bağlantılar
            yardımcı olabilir.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-x-7 gap-y-3 sm:flex-row text-[17px]">
            <Link
              href="/"
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
            >
              Ana sayfa
              <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <Link
              href="/bireysel"
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
            >
              Ürünler
              <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <Link
              href="/destek"
              className="group inline-flex items-center gap-0.5 text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
            >
              Yardım merkezi
              <ChevronRight className="h-4 w-4 transition-transform duration-200 ease-apple group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

import { Tag, Zap, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'

type Highlight = {
  icon: LucideIcon
  title: string
  description: string
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: Tag,
    title: 'Şeffaf fiyat',
    description:
      'Gizli ücret yok, sürpriz yok. Ödediğiniz tutar başta net bellidir.',
  },
  {
    icon: Zap,
    title: 'Anında poliçe',
    description:
      'Birkaç dokunuşla teklif alın, dilerseniz dakikalar içinde başlatın.',
  },
  {
    icon: ShieldCheck,
    title: 'Kolay hasar',
    description:
      'Fotoğraf gönderin, ekibimiz devralsın. Süreç boyunca tek bir muhatap.',
  },
]

export function Highlights() {
  return (
    <section
      aria-labelledby="highlights-title"
      className="bg-apple-offwhite"
    >
      <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
        <h2 id="highlights-title" className="sr-only">
          Öne çıkanlar
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="flex flex-col">
                <Icon
                  className="h-6 w-6 text-apple-darkgray"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-5 text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                  {title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[15px] md:text-[17px] leading-[1.47] text-apple-darkgray/75">
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

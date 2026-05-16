import { FadeIn } from '@/components/motion/FadeIn'

type Stat = {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '2M+', label: 'müşteri' },
  { value: '%98', label: 'memnuniyet' },
  { value: '24sa', label: 'hasar ödemesi' },
  { value: '25 yıl', label: 'sektör tecrübesi' },
]

export function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-apple-offwhite"
    >
      <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
        <h2 id="stats-title" className="sr-only">
          Rakamlarla CDA Sigorta
        </h2>

        <dl className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 md:gap-x-8">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="flex flex-col items-center text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[44px] sm:text-[52px] md:text-[56px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
                  {s.value}
                </dd>
                <p className="mt-2 text-[14px] text-apple-midgray">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  )
}

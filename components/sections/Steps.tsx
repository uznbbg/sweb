import { FadeIn } from '@/components/motion/FadeIn'

export type Step = {
  title: string
  body: string
}

type StepsProps = {
  eyebrow?: string
  title: string
  steps: Step[]
  /** Background tone for the section. Defaults to offwhite. */
  tone?: 'offwhite' | 'lightgray' | 'black'
}

/**
 * Numbered process steps. Used by /hasar.
 */
export function Steps({ eyebrow, title, steps, tone = 'offwhite' }: StepsProps) {
  const bg =
    tone === 'black'
      ? 'bg-apple-black text-white'
      : tone === 'lightgray'
        ? 'bg-apple-lightgray'
        : 'bg-apple-offwhite'

  const headingColor = tone === 'black' ? 'text-white' : 'text-apple-darkgray'
  const eyebrowColor = tone === 'black' ? 'text-white/70' : 'text-apple-midgray'
  const numberColor = tone === 'black' ? 'text-white/40' : 'text-apple-midgray'
  const bodyColor = tone === 'black' ? 'text-white/70' : 'text-apple-darkgray/75'

  return (
    <section aria-labelledby="steps-title" className={bg}>
      <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
        <div className="mb-14 text-center md:mb-20">
          {eyebrow ? (
            <FadeIn>
              <p className={`text-[14px] md:text-[17px] font-medium ${eyebrowColor}`}>
                {eyebrow}
              </p>
            </FadeIn>
          ) : null}
          <FadeIn delay={0.1}>
            <h2
              id="steps-title"
              className={`mt-3 mx-auto max-w-[22ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] ${headingColor}`}
            >
              {title}
            </h2>
          </FadeIn>
        </div>

        <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <li className="flex flex-col">
                <span
                  className={`text-[48px] md:text-[56px] font-semibold leading-none tracking-[-0.015em] ${numberColor}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`mt-6 text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.005em] ${headingColor}`}
                >
                  {step.title}
                </h3>
                <p className={`mt-3 max-w-[34ch] text-[15px] md:text-[17px] leading-[1.47] ${bodyColor}`}>
                  {step.body}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}

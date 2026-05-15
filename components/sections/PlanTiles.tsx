import Link from 'next/link'
import { Check } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'

export type Plan = {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  href: string
  featured?: boolean
}

type PlanTilesProps = {
  eyebrow: string
  title: string
  plans: Plan[]
}

export function PlanTiles({ eyebrow, title, plans }: PlanTilesProps) {
  return (
    <section aria-labelledby="plans-title" className="bg-apple-lightgray">
      <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
        <div className="mb-12 text-center md:mb-16">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray tracking-[-0.005em]">
              {eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="plans-title"
              className="mt-3 mx-auto max-w-[20ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray"
            >
              {title}
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.06}>
              <article
                className={
                  'flex h-full flex-col rounded-apple-tile bg-white p-8 md:p-10 ' +
                  (plan.featured ? 'ring-1 ring-apple-darkgray/10' : '')
                }
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-apple-blue">
                      Önerilen
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-[15px] leading-[1.47] text-apple-darkgray/75">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-baseline gap-1">
                  <span className="text-[40px] md:text-[44px] font-semibold leading-none tracking-[-0.01em] text-apple-darkgray">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-apple-midgray">
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[15px] leading-[1.5] text-apple-darkgray/85"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-apple-blue"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={
                    'mt-10 inline-flex h-11 items-center justify-center rounded-apple-pill px-6 text-[15px] font-medium transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white ' +
                    (plan.featured
                      ? 'bg-apple-blue text-white hover:bg-apple-blue-hover'
                      : 'bg-apple-lightgray text-apple-darkgray hover:bg-apple-midgray/20')
                  }
                >
                  Plan seç
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

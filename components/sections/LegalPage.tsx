import { FadeIn } from '@/components/motion/FadeIn'

export type LegalSection = {
  /** Slug used for anchor link, e.g. 'veri-toplama'. */
  id: string
  heading: string
  /** Plain-text paragraphs. Each becomes a <p>. */
  body: string[]
  /** Optional bullet list under the paragraphs. */
  bullets?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  lede: string
  lastUpdated: string
  sections: LegalSection[]
}

/**
 * Shared layout for all legal / policy pages.
 * Compact hero, narrow text column, big vertical rhythm.
 */
export function LegalPage({
  eyebrow,
  title,
  lede,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      {/* Hero — compact, no image */}
      <section className="relative bg-apple-offwhite overflow-hidden">
        <div aria-hidden className="absolute inset-0 apple-vignette pointer-events-none" />
        <div className="relative mx-auto max-w-apple px-6 pt-20 pb-12 md:pt-28 md:pb-16 text-center">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray tracking-[-0.005em]">
              {eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-3 max-w-[18ch] mx-auto text-[40px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.015em] text-apple-darkgray">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 mx-auto max-w-[56ch] text-[18px] md:text-[20px] leading-[1.45] text-apple-darkgray/75">
              {lede}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-[12px] text-apple-midgray">
              Son güncelleme: {lastUpdated}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="bg-apple-offwhite">
        <div className="mx-auto grid max-w-apple-wide grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16 md:px-8 md:py-24 lg:gap-20">
          {/* Table of contents — desktop sticky */}
          <nav
            aria-label="İçindekiler"
            className="hidden md:block self-start sticky top-20"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-apple-midgray mb-4">
              İçindekiler
            </p>
            <ul className="flex flex-col gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-[13px] leading-[1.5] text-apple-darkgray/70 hover:text-apple-blue transition-colors duration-200 ease-apple"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article body */}
          <article className="max-w-[68ch]">
            {sections.map((section, i) => (
              <FadeIn key={section.id} delay={i * 0.03} margin="-40px">
                <section
                  id={section.id}
                  className="scroll-mt-20 first:mt-0 mt-16 md:mt-20"
                >
                  <h2 className="text-[26px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-apple-darkgray">
                    {section.heading}
                  </h2>
                  <div className="mt-5 flex flex-col gap-4">
                    {section.body.map((p, j) => (
                      <p
                        key={j}
                        className="text-[16px] md:text-[17px] leading-[1.6] text-apple-darkgray/85"
                      >
                        {p}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="mt-2 flex flex-col gap-2 list-disc pl-5 marker:text-apple-midgray">
                        {section.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-[16px] md:text-[17px] leading-[1.6] text-apple-darkgray/85"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              </FadeIn>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

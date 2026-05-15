'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export type FAQItem = {
  question: string
  answer: string
}

/**
 * FAQ section on black bg with our restyled accordion.
 * Client because Radix Accordion needs state.
 */
export function FAQ({
  title,
  items,
}: {
  title: string
  items: FAQItem[]
}) {
  return (
    <section aria-labelledby="faq-title" className="bg-apple-black text-white">
      <div className="mx-auto max-w-apple px-6 py-24 md:py-32">
        <h2
          id="faq-title"
          className="text-center text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em]"
        >
          {title}
        </h2>

        <Accordion type="single" collapsible className="mt-12 md:mt-16">
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-[18px] md:text-[20px] font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[60ch] text-[15px] md:text-[16px] leading-[1.6] text-white/65">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

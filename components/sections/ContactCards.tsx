import Link from 'next/link'
import { Phone, Mail, MessageCircle, ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '@/components/motion/FadeIn'

type ContactCardProps = {
  icon: LucideIcon
  title: string
  body: string
  cta: string
  href: string
}

const CARDS: ContactCardProps[] = [
  {
    icon: Phone,
    title: 'Telefon',
    body: '7/24 destek hattımız her zaman açık. Birkaç saniyede bir uzmana bağlanın.',
    cta: '0850 000 00 00',
    href: 'tel:08500000000',
  },
  {
    icon: Mail,
    title: 'E-posta',
    body: 'Yazılı kayıt tercih edenler için. Aynı iş günü içinde geri dönüş.',
    cta: 'destek@cdasigorta.com',
    href: 'mailto:destek@cdasigorta.com',
  },
  {
    icon: MessageCircle,
    title: 'Canlı destek',
    body: 'Mesai saatleri içinde uygulama üzerinden anlık yardım alın.',
    cta: 'Sohbeti başlat',
    href: '/destek/sohbet',
  },
]

export function ContactCards() {
  return (
    <section aria-labelledby="contact-cards-title" className="bg-apple-lightgray">
      <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
        <div className="mb-12 text-center md:mb-16">
          <FadeIn>
            <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
              İletişim
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="contact-cards-title"
              className="mt-3 mx-auto max-w-[22ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray"
            >
              Bize ulaşmanın üç yolu.
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {CARDS.map(({ icon: Icon, title, body, cta, href }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-apple-tile bg-white p-8 md:p-10">
                <Icon
                  className="h-6 w-6 text-apple-darkgray"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-5 text-[22px] md:text-[24px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] md:text-[17px] leading-[1.47] text-apple-darkgray/75">
                  {body}
                </p>
                <Link
                  href={href}
                  className="group mt-8 inline-flex items-center gap-0.5 text-[15px] text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
                >
                  {cta}
                  <ChevronRight
                    className="h-3.5 w-3.5 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

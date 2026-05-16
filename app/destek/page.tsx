import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, Stethoscope, Car, Home, Heart, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ProductHero } from '@/components/sections/ProductHero'
import { ContactCards } from '@/components/sections/ContactCards'
import { FAQ, type FAQItem } from '@/components/sections/FAQ'
import { FadeIn } from '@/components/motion/FadeIn'
import { IMAGE_META } from '@/lib/image-meta'
import { buildMetadata, breadcrumbLd, faqLd, jsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Yardım Merkezi & Destek',
  description:
    'Sıkça sorulanlar, kategori bazlı yardım, canlı destek ve telefon hattı. Sağlık, kasko, konut, hayat ve kurumsal sigorta sorularınız için tek adres.',
  path: '/destek',
  keywords: ['sigorta destek', 'yardım merkezi', 'sigorta SSS', 'müşteri hizmetleri'],
})

const CATEGORIES: { icon: LucideIcon; title: string; body: string; href: string }[] = [
  { icon: Stethoscope, title: 'Sağlık', body: 'Anlaşmalı hastaneler, geri ödeme süreçleri.', href: '/destek/saglik' },
  { icon: Car, title: 'Kasko', body: 'Hasar, çekici, yenileme ve değişiklikler.', href: '/destek/kasko' },
  { icon: Home, title: 'Konut', body: 'Hasar bildirimi, ek teminat ve yenileme.', href: '/destek/konut' },
  { icon: Heart, title: 'Hayat', body: 'Lehtar değişiklikleri, prim ödemeleri.', href: '/destek/hayat' },
  { icon: FileText, title: 'Poliçe yönetimi', body: 'Belge indirme, adres değişikliği.', href: '/destek/police' },
  { icon: Briefcase, title: 'Kurumsal', body: 'Toplu poliçe yönetimi, çalışan ekleme.', href: '/destek/kurumsal' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Poliçemi nasıl yenileyebilirim?',
    answer:
      'Süresi dolmadan 30 gün önce uygulama üzerinden bildirim alırsınız. Tek tuşla yenileyebilir veya planınızı değiştirerek devam edebilirsiniz.',
  },
  {
    question: 'Adresim veya iletişim bilgilerim değişti, ne yapmalıyım?',
    answer:
      'Hesap ayarlarınızdan birkaç saniyede güncelleyebilirsiniz. Resmi belgeleriniz otomatik olarak yeni bilgilerle güncellenir.',
  },
  {
    question: 'Ödeme yöntemi değişikliği nasıl yapılır?',
    answer:
      'Ayarlar > Ödeme yöntemleri’nden kart ekleyip varsayılan olarak işaretlemeniz yeterli. Bir sonraki yenilemede yeni karta geçilir.',
  },
  {
    question: 'Hesabımı nasıl silebilirim?',
    answer:
      'Aktif poliçeniz yoksa hesap ayarlarından silebilirsiniz. Aktif poliçe varsa destek ekibimizle iletişime geçmeniz gerekir.',
  },
]

const destekLd = [
  breadcrumbLd([
    { name: 'Ana sayfa', path: '/' },
    { name: 'Destek', path: '/destek' },
  ]),
  faqLd(FAQ_ITEMS.map((it) => ({ q: it.question, a: it.answer }))),
]

export default function DestekPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(destekLd)} />
      <ProductHero
        eyebrow="Destek"
        title="Her sorunuzun bir yanıtı var."
        subtitle="Yardım merkezimiz, kategori bazlı içerikler ve gerçek insanlardan oluşan ekibimiz."
        primaryHref="#kategoriler"
        primaryLabel="Kategorilere göz at"
        secondaryHref="/destek/iletisim"
        secondaryLabel="Bize ulaşın"
        image={{
          src: '/images/destek-hero.webp',
          alt: '',
          blurDataURL: IMAGE_META.DESTEK_HERO.blurDataURL,
        }}
      />

      {/* Categories */}
      <section id="kategoriler" className="bg-apple-offwhite">
        <div className="mx-auto max-w-apple-wide px-6 py-24 md:px-8 md:py-32">
          <div className="mb-12 text-center md:mb-16">
            <FadeIn>
              <p className="text-[14px] md:text-[17px] font-medium text-apple-midgray">
                Kategoriler
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-3 mx-auto max-w-[22ch] text-[40px] sm:text-[48px] md:text-[56px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
                Aradığınız konuyu seçin.
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {CATEGORIES.map(({ icon: Icon, title, body, href }, i) => (
              <FadeIn key={title} delay={i * 0.04}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-apple-tile bg-white p-8 transition-shadow duration-300 ease-apple hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                >
                  <Icon
                    className="h-6 w-6 text-apple-darkgray"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 text-[22px] font-semibold leading-[1.2] tracking-[-0.005em] text-apple-darkgray">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.47] text-apple-darkgray/75">
                    {body}
                  </p>
                  <span className="group/link mt-6 inline-flex items-center gap-0.5 text-[15px] text-apple-blue">
                    Konuya git
                    <ChevronRight
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-apple group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCards />
      <FAQ title="Sıkça sorulanlar." items={FAQ_ITEMS} />
    </>
  )
}

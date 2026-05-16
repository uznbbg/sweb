import Link from 'next/link'
import { FadeIn } from '@/components/motion/FadeIn'

type Product = {
  title: string
  href: string
  svg: string
}

const PRODUCTS: Product[] = [
  { title: 'Trafik Sigortası', href: '/teklif-al?urun=kasko', svg: '/svg/imgi_53_traffic.svg' },
  { title: '2. El Trafik Sigortası', href: '/teklif-al?urun=kasko', svg: '/svg/imgi_8_used-vehicle-traffic-blue.svg' },
  { title: 'Kasko', href: '/teklif-al?urun=kasko', svg: '/svg/imgi_10_auto-v2.svg' },
  { title: 'İMM', href: '/teklif-al?urun=kasko', svg: '/svg/imgi_54_imm.svg' },
  { title: 'Yeşil Kart', href: '/teklif-al?urun=kasko', svg: '/svg/imgi_13_green-card-blue.svg' },
  { title: 'Özel Sağlık', href: '/bireysel/saglik', svg: '/svg/imgi_15_health-v2.svg' },
  { title: 'Tamamlayıcı Sağlık', href: '/bireysel/saglik', svg: '/svg/imgi_56_complementhealth-v2.svg' },
  { title: 'Seyahat Sağlık', href: '/teklif-al?urun=saglik', svg: '/svg/imgi_57_travel.svg' },
  { title: 'Konut', href: '/teklif-al?urun=konut', svg: '/svg/imgi_60_housing.svg' },
  { title: 'DASK', href: '/teklif-al?urun=konut', svg: '/svg/imgi_59_dask.svg' },
]

export function ProductIconGrid() {
  return (
    <FadeIn delay={0.2} y={24}>
      <div className="w-full max-w-[1100px] mx-auto">
        <ul
          role="list"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          {PRODUCTS.map((p) => (
            <li key={p.title} className="relative">
              <Link
                href={p.href}
                className="group relative flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-apple-tile bg-white px-4 py-6 transition-all duration-300 ease-apple hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-offwhite"
              >
                <span className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
                  {/* SVGs are small static brand illustrations; <img> avoids next/image SVG config. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.svg}
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </span>

                <span className="text-center text-[13px] sm:text-[14px] md:text-[15px] font-medium leading-[1.3] tracking-[-0.005em] text-apple-darkgray">
                  {p.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

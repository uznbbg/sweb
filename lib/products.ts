import { IMAGE_META } from '@/lib/image-meta'

export type Product = {
  slug: string
  eyebrow: string
  title: string
  description: string
  href: string
  buyHref: string
  image: { src: string; width: number; height: number; blurDataURL: string; alt: string }
}

export const PRODUCTS: Product[] = [
  {
    slug: 'saglik',
    eyebrow: 'Sağlık',
    title: 'Doktorun bir tık uzağında.',
    description:
      'Özel hastanelerde anlaşmalı kadrolar, online muayene ve hızlı geri ödeme — hepsi tek bir poliçede.',
    href: '/bireysel/saglik',
    buyHref: '/teklif-al?urun=saglik',
    image: { src: '/images/saglik.webp', ...IMAGE_META.SAGLIK, alt: '' },
  },
  {
    slug: 'kasko',
    eyebrow: 'Kasko',
    title: 'Aracınız, her şart altında.',
    description:
      'Kaza, çarpma, hırsızlık ve doğal afetlere karşı tam koruma. 7/24 yol yardımı dahil.',
    href: '/bireysel/kasko',
    buyHref: '/teklif-al?urun=kasko',
    image: { src: '/images/kasko.webp', ...IMAGE_META.KASKO, alt: '' },
  },
  {
    slug: 'konut',
    eyebrow: 'Konut',
    title: 'Evinizin huzuru, sürekli.',
    description:
      'Yangın, su baskını, hırsızlık ve depreme karşı kapsamlı koruma. Eşyalarınız ve binanız için.',
    href: '/bireysel/konut',
    buyHref: '/teklif-al?urun=konut',
    image: { src: '/images/konut.webp', ...IMAGE_META.KONUT, alt: '' },
  },
  {
    slug: 'hayat',
    eyebrow: 'Hayat',
    title: 'Sevdikleriniz için, hep yanında.',
    description:
      'Beklenmedik durumlarda ailenize finansal güvence. Uzun vadeli birikim seçenekleriyle.',
    href: '/bireysel/hayat',
    buyHref: '/teklif-al?urun=hayat',
    image: { src: '/images/hayat.webp', ...IMAGE_META.HAYAT, alt: '' },
  },
]

import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description:
      'Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı. Sağlık, kasko, konut, hayat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FBFBFD',
    theme_color: '#FBFBFD',
    lang: 'tr-TR',
    dir: 'ltr',
    orientation: 'portrait',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png', purpose: 'maskable' },
    ],
  }
}

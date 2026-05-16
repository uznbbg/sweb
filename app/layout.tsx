import type { Metadata, Viewport } from 'next'
import { inter } from '@/lib/fonts'
import { TopNav } from '@/components/nav/TopNav'
import { Footer } from '@/components/nav/Footer'
import { SITE, organizationLd, websiteLd, jsonLd } from '@/lib/seo'
import './globals.css'

const defaultTitle = `${SITE.name} — Güvende olmak, hiç bu kadar sade olmamıştı.`
const defaultDescription =
  'Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı. Sağlık, kasko, konut ve hayat sigortası teklifinizi 60 saniyede alın.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: defaultDescription,
  applicationName: SITE.name,
  generator: 'Next.js',
  category: 'Insurance',
  keywords: [
    'sigorta',
    'online sigorta',
    'sağlık sigortası',
    'özel sağlık sigortası',
    'tamamlayıcı sağlık sigortası',
    'kasko',
    'trafik sigortası',
    'konut sigortası',
    'DASK',
    'hayat sigortası',
    'seyahat sağlık sigortası',
    'sigorta teklifi',
    'CDA Sigorta',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: SITE.url,
    languages: { 'tr-TR': SITE.url },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: '/images/og.webp', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter,
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/og.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    // google: 'replace-with-search-console-token',
    // yandex: 'replace-with-yandex-token',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBFD' },
    { media: '(prefers-color-scheme: dark)', color: '#1D1D1F' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr-TR" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          // Same-origin static JSON — safe to inline.
          dangerouslySetInnerHTML={jsonLd([organizationLd(), websiteLd()])}
        />
      </head>
      <body className="min-h-full flex flex-col bg-apple-offwhite text-apple-darkgray font-display">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-apple-pill focus:bg-apple-blue focus:px-4 focus:py-2 focus:text-white focus:text-[12px]"
        >
          Ana içeriğe geç
        </a>
        <TopNav />
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

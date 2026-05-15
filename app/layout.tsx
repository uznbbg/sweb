import type { Metadata, Viewport } from 'next'
import { inter } from '@/lib/fonts'
import { TopNav } from '@/components/nav/TopNav'
import { Footer } from '@/components/nav/Footer'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cdasigorta.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CDA Sigorta — Güvende olmak, hiç bu kadar sade olmamıştı.',
    template: '%s | CDA Sigorta',
  },
  description:
    'Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı. Sağlık, kasko, konut ve hayat sigortası teklifinizi 60 saniyede alın.',
  applicationName: 'CDA Sigorta',
  keywords: ['sigorta', 'sağlık sigortası', 'kasko', 'konut sigortası', 'hayat sigortası', 'CDA Sigorta'],
  authors: [{ name: 'CDA Sigorta' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'CDA Sigorta',
    title: 'CDA Sigorta — Güvende olmak, hiç bu kadar sade olmamıştı.',
    description: 'Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı.',
    images: [
      {
        url: '/images/og.webp',
        width: 1200,
        height: 630,
        alt: 'CDA Sigorta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDA Sigorta',
    description: 'Sizi ve sevdiklerinizi koruyan sigorta, yeniden tasarlandı.',
    images: ['/images/og.webp'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#FBFBFD',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-apple-offwhite text-apple-darkgray font-display">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-apple-pill focus:bg-apple-blue focus:px-4 focus:py-2 focus:text-white focus:text-[12px]"
        >
          Ana içeriğe geç
        </a>
        <TopNav />
        <div id="main" className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

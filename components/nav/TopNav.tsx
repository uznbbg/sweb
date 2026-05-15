import Link from 'next/link'
import { Search } from 'lucide-react'
import { PRIMARY_NAV } from '@/lib/nav-data'
import { Wordmark } from '@/components/nav/Wordmark'
import { MobileMenu } from '@/components/nav/MobileMenu'

/**
 * Sticky top nav. 44px tall, translucent black, blur-xl.
 * Server component — only the mobile sheet is client-side.
 */
export function TopNav() {
  return (
    <header className="sticky top-0 z-40">
      <div className="h-11 bg-apple-black/72 backdrop-blur-xl supports-[backdrop-filter]:bg-apple-black/60">
        <nav
          aria-label="Birincil navigasyon"
          className="mx-auto flex h-full max-w-apple-wide items-center px-6 lg:px-8"
        >
          {/* Brand — left */}
          <Link
            href="/"
            aria-label="CDA Sigorta ana sayfa"
            className="flex items-center text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue rounded-sm"
          >
            <Wordmark className="text-white" />
          </Link>

          {/* Center nav — desktop only */}
          <ul className="ml-10 hidden md:flex items-center gap-7">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[12px] leading-none text-white/80 hover:text-white transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — search + CTA */}
          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              aria-label="Ara"
              className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-apple-pill text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <Link
              href="/teklif-al"
              className="hidden md:inline-flex h-7 items-center rounded-apple-pill bg-apple-blue px-3.5 text-[12px] font-medium text-white hover:bg-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Teklif Al
            </Link>

            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}

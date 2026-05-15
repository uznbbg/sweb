import Link from 'next/link'
import { FOOTER_COLUMNS } from '@/lib/nav-data'
import { Wordmark } from '@/components/nav/Wordmark'
import { LanguageSelector } from '@/components/nav/LanguageSelector'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-apple-black text-white/60">
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8 pt-20 pb-10">
        {/* Tiny wordmark on top */}
        <Wordmark size="xs" className="text-white/70" />

        {/* Five columns of small links */}
        <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-5">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[12px] font-semibold text-white tracking-tight mb-3">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] leading-tight text-white/55 hover:text-white/85 transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-white/45 leading-relaxed">
            Copyright © {year} CDA Sigorta A.Ş. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/gizlilik"
              className="text-[12px] text-white/45 hover:text-white/80 transition-colors"
            >
              Gizlilik
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/kosullar"
              className="text-[12px] text-white/45 hover:text-white/80 transition-colors"
            >
              Kullanım koşulları
            </Link>
            <span className="text-white/20">·</span>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}

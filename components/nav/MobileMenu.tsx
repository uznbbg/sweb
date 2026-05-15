'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { PRIMARY_NAV } from '@/lib/nav-data'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Menüyü aç"
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-apple-pill text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
      >
        <Menu className="h-5 w-5" strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col px-8 pt-20 pb-10"
      >
        <SheetTitle>Menü</SheetTitle>

        <div className="mb-8 flex items-center gap-3 rounded-apple-pill border border-white/15 bg-white/5 px-5 h-12 text-white/70">
          <Search className="h-4 w-4" strokeWidth={1.5} />
          <input
            type="search"
            placeholder="Ara"
            className="flex-1 bg-transparent text-[17px] text-white placeholder:text-white/40 outline-none"
          />
        </div>

        <nav aria-label="Mobil ana menü" className="flex-1 overflow-y-auto">
          <ul className="flex flex-col">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 transition-colors hover:opacity-80"
                >
                  <span className="block text-[28px] font-semibold tracking-[-0.01em] text-white leading-tight">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-[13px] text-white/50">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/teklif-al"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-apple-pill bg-apple-blue px-7 text-[17px] font-medium text-white transition-colors hover:bg-apple-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Teklif Al
        </Link>
      </SheetContent>
    </Sheet>
  )
}

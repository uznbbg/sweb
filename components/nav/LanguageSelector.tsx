'use client'

import { useState } from 'react'
import { Globe, Check } from 'lucide-react'

const LOCALES = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
]

/**
 * Minimal language selector for the footer. Visual-only for now —
 * does not actually switch locale until i18n is wired in.
 */
export function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('tr')

  const currentLabel = LOCALES.find((l) => l.code === current)?.label ?? 'Türkçe'

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-8 items-center gap-2 rounded-apple-pill border border-white/10 px-3 text-[12px] text-white/60 hover:text-white hover:border-white/20 transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
        {currentLabel}
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute bottom-full mb-2 left-0 min-w-[160px] rounded-apple-card border border-white/10 bg-apple-black/90 backdrop-blur-xl py-1 shadow-apple-hover"
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={current === l.code}
                onClick={() => {
                  setCurrent(l.code)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-[12px] text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>{l.label}</span>
                {current === l.code ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

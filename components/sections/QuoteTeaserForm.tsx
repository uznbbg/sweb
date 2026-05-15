'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

/**
 * Pill input with an inline blue submit button on the right.
 * Submit redirects to /teklif-al?id=<value>. No backend yet —
 * this is the front-door capture.
 */
export function QuoteTeaserForm() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [pending, startTransition] = useTransition()

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    startTransition(() => {
      router.push(`/teklif-al?id=${encodeURIComponent(trimmed)}`)
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Hızlı teklif"
      className="relative mx-auto w-full max-w-[560px]"
    >
      <label htmlFor="quote-id" className="sr-only">
        Plaka veya TC numaranız
      </label>

      <input
        id="quote-id"
        name="id"
        type="text"
        autoComplete="off"
        spellCheck={false}
        inputMode="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Plaka veya TC numaranız"
        className="h-14 w-full rounded-apple-pill border border-apple-midgray/25 bg-white pl-7 pr-16 text-[17px] text-apple-darkgray placeholder:text-apple-midgray transition-colors duration-200 ease-apple focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/25"
      />

      <button
        type="submit"
        disabled={!value.trim() || pending}
        aria-label="Teklif al"
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-apple-pill bg-apple-blue text-white transition-colors duration-200 ease-apple hover:bg-apple-blue-hover disabled:bg-apple-midgray/40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-offwhite"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </button>
    </form>
  )
}

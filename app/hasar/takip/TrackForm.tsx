'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Check, Clock, FileText, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = { icon: LucideIcon; title: string; body: string; status: 'done' | 'active' | 'pending' }

const TIMELINE: Step[] = [
  {
    icon: Check,
    title: 'Bildirim alındı',
    body: 'Dosyanız oluşturuldu, danışman atandı.',
    status: 'done',
  },
  {
    icon: FileText,
    title: 'İnceleniyor',
    body: 'Belgeler ekibimiz tarafından değerlendiriliyor.',
    status: 'active',
  },
  {
    icon: Clock,
    title: 'Onay bekleniyor',
    body: 'Ek belge gerekirse size bildirim göndereceğiz.',
    status: 'pending',
  },
  {
    icon: Wallet,
    title: 'Ödeme',
    body: 'Tazminat hesabınıza yatırıldığında bilgilendirileceksiniz.',
    status: 'pending',
  },
]

export function TrackForm() {
  const params = useSearchParams()
  const initialRef = params.get('ref') ?? ''
  const [ref, setRef] = useState(initialRef)
  const [submittedRef, setSubmittedRef] = useState<string | null>(
    initialRef ? initialRef : null
  )

  // Keep submittedRef in sync with the URL on mount.
  useEffect(() => {
    if (initialRef) setSubmittedRef(initialRef)
  }, [initialRef])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = ref.trim()
    if (!trimmed) return
    setSubmittedRef(trimmed)
  }

  return (
    <div className="flex flex-col gap-12">
      <form
        onSubmit={onSubmit}
        aria-label="Hasar dosyası sorgulama"
        className="relative mx-auto w-full max-w-[560px]"
      >
        <label htmlFor="track-ref" className="sr-only">
          Dosya numarası
        </label>
        <input
          id="track-ref"
          name="ref"
          type="text"
          inputMode="text"
          autoComplete="off"
          placeholder="Dosya numaranız (örn. CDA-123456)"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          className="h-14 w-full rounded-apple-pill border border-apple-midgray/25 bg-white pl-7 pr-16 text-[17px] text-apple-darkgray placeholder:text-apple-midgray transition-colors duration-200 ease-apple focus:border-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/25"
        />
        <button
          type="submit"
          aria-label="Sorgula"
          disabled={!ref.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-apple-pill bg-apple-blue text-white transition-colors duration-200 ease-apple hover:bg-apple-blue-hover disabled:bg-apple-midgray/40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-offwhite"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </form>

      {submittedRef ? <Timeline ref_={submittedRef} /> : null}
    </div>
  )
}

function Timeline({ ref_ }: { ref_: string }) {
  return (
    <div className="mx-auto w-full max-w-[680px] rounded-apple-tile bg-white p-8 md:p-10">
      <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-apple-midgray">
        Dosya
      </p>
      <h2 className="mt-2 text-[28px] md:text-[32px] font-semibold tracking-[-0.01em] text-apple-darkgray">
        {ref_}
      </h2>
      <p className="mt-2 text-[14px] text-apple-midgray">
        Güncel durum: <span className="text-apple-darkgray">İnceleniyor</span>
      </p>

      <ol className="mt-10 flex flex-col gap-7">
        {TIMELINE.map((step) => {
          const StepIcon = step.icon
          const done = step.status === 'done'
          const active = step.status === 'active'
          return (
            <li key={step.title} className="flex items-start gap-5">
              <div
                className={
                  'mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ' +
                  (done
                    ? 'bg-apple-blue text-white'
                    : active
                      ? 'bg-apple-darkgray text-white'
                      : 'bg-apple-lightgray text-apple-midgray')
                }
                aria-hidden
              >
                <StepIcon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col">
                <h3
                  className={
                    'text-[17px] font-semibold leading-[1.3] tracking-[-0.005em] ' +
                    (active ? 'text-apple-darkgray' : 'text-apple-darkgray/85')
                  }
                >
                  {step.title}
                  {active ? (
                    <span className="ml-3 inline-flex h-5 items-center rounded-apple-pill bg-apple-blue/10 px-2 text-[11px] font-medium uppercase tracking-[0.08em] text-apple-blue align-middle">
                      Şu anda
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.5] text-apple-darkgray/70">
                  {step.body}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

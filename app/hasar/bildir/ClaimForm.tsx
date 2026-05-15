'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field } from '@/components/forms/Field'
import { RadioPill } from '@/components/forms/RadioPill'

const CLAIM_TYPES = [
  { value: 'kasko', label: 'Kasko' },
  { value: 'saglik', label: 'Sağlık' },
  { value: 'konut', label: 'Konut' },
  { value: 'hayat', label: 'Hayat' },
  { value: 'diger', label: 'Diğer' },
]

export function ClaimForm() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)

  const [type, setType] = useState('kasko')
  const [policy, setPolicy] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [phone, setPhone] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!policy.trim() || !date || !description.trim() || !phone.trim()) return

    startTransition(() => {
      // No backend yet — simulate success and link to tracking with a fake ref.
      const ref = `CDA-${Math.floor(100000 + Math.random() * 900000)}`
      setSubmitted(true)
      // Navigate to tracking with prefilled ref after a brief moment so the
      // success state can be seen.
      setTimeout(() => {
        router.push(`/hasar/takip?ref=${ref}`)
      }, 1200)
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-apple-blue text-white">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-6 text-[28px] md:text-[32px] font-semibold tracking-[-0.01em] text-apple-darkgray">
          Bildirim alındı.
        </h3>
        <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.5] text-apple-darkgray/75">
          Dosyanız hazırlanıyor. Takip ekranına yönlendiriliyorsunuz…
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Hasar bildirim formu"
      className="flex flex-col gap-7"
      noValidate
    >
      <Field label="Hasar türü" htmlFor="claim-type">
        <RadioPill
          name="type"
          value={type}
          onChange={setType}
          options={CLAIM_TYPES}
        />
      </Field>

      <Field
        label="Poliçe numarası"
        htmlFor="policy"
        hint="Poliçenizin üst köşesindeki 8 haneli numara."
      >
        <Input
          id="policy"
          name="policy"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="P-12345678"
          value={policy}
          onChange={(e) => setPolicy(e.target.value)}
          required
        />
      </Field>

      <Field
        label="Olay tarihi"
        htmlFor="date"
        hint="Hasarın gerçekleştiği gün ve saat."
      >
        <Input
          id="date"
          name="date"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Field>

      <Field label="Telefon" htmlFor="phone">
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="0 (5xx) xxx xx xx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Field>

      <Field
        label="Olay açıklaması"
        htmlFor="description"
        hint="Kısa, net ve olduğu gibi yazın. Fotoğrafları sonraki adımda yükleyebilirsiniz."
      >
        <Textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ne, ne zaman ve nerede oldu?"
          required
        />
      </Field>

      <div className="flex items-start gap-3 rounded-apple-card border border-apple-midgray/20 bg-white p-5">
        <input
          id="kvkk"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-apple-midgray/40 text-apple-blue focus:ring-apple-blue focus:ring-offset-0"
        />
        <label htmlFor="kvkk" className="text-[13px] leading-[1.5] text-apple-darkgray/85">
          Bildirimle birlikte paylaştığım bilgilerin hasar süreci için
          işlenmesini onaylıyorum.{' '}
          <a href="/kvkk" className="text-apple-blue hover:text-apple-blue-hover">
            KVKK aydınlatma metni
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-apple-pill bg-apple-blue px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-apple hover:bg-apple-blue-hover disabled:bg-apple-midgray/40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-offwhite self-start"
      >
        {pending ? 'Gönderiliyor…' : 'Bildirimi gönder'}
        {!pending ? <ArrowRight className="h-4 w-4" strokeWidth={2} /> : null}
      </button>
    </form>
  )
}

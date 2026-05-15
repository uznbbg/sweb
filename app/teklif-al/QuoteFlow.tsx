'use client'

import { useState, useEffect, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Field } from '@/components/forms/Field'
import { RadioPill } from '@/components/forms/RadioPill'

type ProductKey = 'saglik' | 'kasko' | 'konut' | 'hayat'

const PRODUCTS: { value: ProductKey; label: string }[] = [
  { value: 'saglik', label: 'Sağlık' },
  { value: 'kasko', label: 'Kasko' },
  { value: 'konut', label: 'Konut' },
  { value: 'hayat', label: 'Hayat' },
]

const PRODUCT_COPY: Record<ProductKey, { ledeField: string; ledePlaceholder: string; ledeInputMode: 'numeric' | 'text' }> = {
  saglik: { ledeField: 'TC kimlik numarası', ledePlaceholder: '11 haneli TC kimlik numaranız', ledeInputMode: 'numeric' },
  kasko: { ledeField: 'Plaka', ledePlaceholder: '34 ABC 1234', ledeInputMode: 'text' },
  konut: { ledeField: 'DASK poliçe numarası', ledePlaceholder: 'Konutunuzun DASK numarası', ledeInputMode: 'text' },
  hayat: { ledeField: 'TC kimlik numarası', ledePlaceholder: '11 haneli TC kimlik numaranız', ledeInputMode: 'numeric' },
}

export function QuoteFlow() {
  const params = useSearchParams()
  const initialProduct = (params.get('urun') as ProductKey | null) ?? 'kasko'
  const initialId = params.get('id') ?? ''

  const [product, setProduct] = useState<ProductKey>(
    PRODUCTS.some((p) => p.value === initialProduct) ? initialProduct : 'kasko'
  )
  const [lede, setLede] = useState(initialId)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [birth, setBirth] = useState('')
  const [pending, startTransition] = useTransition()
  const [done, setDone] = useState<string | null>(null)

  // Sync prefilled values when URL changes (e.g., from QuoteTeaser).
  useEffect(() => {
    if (initialId) setLede(initialId)
  }, [initialId])

  const copy = PRODUCT_COPY[product]

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!lede.trim() || !name.trim() || !phone.trim() || !email.trim() || !birth) return
    startTransition(() => {
      const ref = `Q-${Math.floor(100000 + Math.random() * 900000)}`
      setTimeout(() => setDone(ref), 400)
    })
  }

  if (done) {
    return (
      <div className="mx-auto max-w-[640px] rounded-apple-tile bg-white p-8 md:p-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-apple-blue text-white">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <h2 className="mt-6 text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
          Teklifiniz hazırlanıyor.
        </h2>
        <p className="mt-4 max-w-[44ch] mx-auto text-[17px] leading-[1.5] text-apple-darkgray/75">
          Bir uzmanımız en geç 30 dakika içinde size ulaşacak. Referans
          numaranız:
        </p>
        <p className="mt-3 text-[20px] font-semibold tracking-[-0.005em] text-apple-darkgray">
          {done}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-x-7 gap-y-3 sm:flex-row text-[15px]">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-apple-pill bg-apple-blue px-6 text-white hover:bg-apple-blue-hover transition-colors duration-200 ease-apple"
          >
            Ana sayfaya dön
          </Link>
          <Link
            href="/destek"
            className="text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple"
          >
            Yardım merkezine git
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Teklif formu"
      className="flex flex-col gap-7"
      noValidate
    >
      <Field label="Ürün" htmlFor="urun">
        <RadioPill
          name="urun"
          value={product}
          onChange={(v) => setProduct(v as ProductKey)}
          options={PRODUCTS}
        />
      </Field>

      <Field
        label={copy.ledeField}
        htmlFor="lede"
        hint="Hesaplama için kullanılır, kayıt edilmez."
      >
        <Input
          id="lede"
          name="lede"
          type="text"
          inputMode={copy.ledeInputMode}
          autoComplete="off"
          placeholder={copy.ledePlaceholder}
          value={lede}
          onChange={(e) => setLede(e.target.value)}
          required
        />
      </Field>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <Field label="Ad soyad" htmlFor="name">
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Field>

        <Field label="Doğum tarihi" htmlFor="birth">
          <Input
            id="birth"
            name="birth"
            type="date"
            autoComplete="bday"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
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

        <Field label="E-posta" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="size@ornek.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
      </div>

      <div className="flex items-start gap-3 rounded-apple-card border border-apple-midgray/20 bg-white p-5">
        <input
          id="kvkk-q"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-apple-midgray/40 text-apple-blue focus:ring-apple-blue focus:ring-offset-0"
        />
        <label htmlFor="kvkk-q" className="text-[13px] leading-[1.5] text-apple-darkgray/85">
          Teklif hesaplaması için bilgilerimin işlenmesini onaylıyorum.{' '}
          <Link href="/kvkk" className="text-apple-blue hover:text-apple-blue-hover">
            KVKK aydınlatma metni
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-apple-pill bg-apple-blue px-8 text-[15px] font-medium text-white transition-colors duration-200 ease-apple hover:bg-apple-blue-hover disabled:bg-apple-midgray/40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 focus-visible:ring-offset-apple-offwhite self-start"
      >
        {pending ? 'Hesaplanıyor…' : 'Teklif al'}
        {!pending ? <ArrowRight className="h-4 w-4" strokeWidth={2} /> : null}
      </button>
    </form>
  )
}

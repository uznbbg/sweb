'use client'

import { useState, useTransition } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field } from '@/components/forms/Field'
import { RadioPill } from '@/components/forms/RadioPill'

const SUBJECTS = [
  { value: 'genel', label: 'Genel soru' },
  { value: 'police', label: 'Poliçe' },
  { value: 'hasar', label: 'Hasar' },
  { value: 'odeme', label: 'Ödeme' },
  { value: 'diger', label: 'Diğer' },
]

export function ContactForm() {
  const [pending, startTransition] = useTransition()
  const [sent, setSent] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('genel')
  const [message, setMessage] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    startTransition(() => {
      // No backend wired — visual success only.
      setTimeout(() => setSent(true), 400)
    })
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-apple-blue text-white">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-6 text-[28px] md:text-[32px] font-semibold tracking-[-0.01em] text-apple-darkgray">
          Mesajınız iletildi.
        </h3>
        <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.5] text-apple-darkgray/75">
          Ekibimiz aynı iş günü içinde geri dönüş yapacak.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="İletişim formu"
      className="flex flex-col gap-7"
      noValidate
    >
      <Field label="Konu" htmlFor="subject">
        <RadioPill
          name="subject"
          value={subject}
          onChange={setSubject}
          options={SUBJECTS}
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

      <Field
        label="Mesajınız"
        htmlFor="message"
        hint="Sorunuzu olabildiğince net yazın; daha doğru bir geri dönüş yapalım."
      >
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Size nasıl yardımcı olabiliriz?"
          required
        />
      </Field>

      <div className="flex items-start gap-3 rounded-apple-card border border-apple-midgray/20 bg-white p-5">
        <input
          id="kvkk-c"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-apple-midgray/40 text-apple-blue focus:ring-apple-blue focus:ring-offset-0"
        />
        <label htmlFor="kvkk-c" className="text-[13px] leading-[1.5] text-apple-darkgray/85">
          Mesajımla paylaştığım bilgilerin geri dönüş için işlenmesini
          onaylıyorum.{' '}
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
        {pending ? 'Gönderiliyor…' : 'Mesajı gönder'}
        {!pending ? <ArrowRight className="h-4 w-4" strokeWidth={2} /> : null}
      </button>
    </form>
  )
}

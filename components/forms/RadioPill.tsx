'use client'

import { cn } from '@/lib/utils'

type Option = { value: string; label: string }

type RadioPillProps = {
  name: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  className?: string
}

/**
 * Pill-style radio group. Used in claim form for "Hasar türü".
 * Selected pill turns blue; others stay white with hairline border.
 */
export function RadioPill({
  name,
  value,
  onChange,
  options,
  className,
}: RadioPillProps) {
  return (
    <div role="radiogroup" className={cn('flex flex-wrap gap-2', className)}>
      {options.map((opt) => {
        const selected = value === opt.value
        return (
          <label
            key={opt.value}
            className={cn(
              'inline-flex h-10 cursor-pointer items-center rounded-apple-pill px-5 text-[14px] font-medium transition-colors duration-200 ease-apple focus-within:ring-2 focus-within:ring-apple-blue focus-within:ring-offset-2 focus-within:ring-offset-apple-offwhite',
              selected
                ? 'bg-apple-blue text-white hover:bg-apple-blue-hover'
                : 'border border-apple-midgray/25 bg-white text-apple-darkgray hover:border-apple-darkgray/40'
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        )
      })}
    </div>
  )
}

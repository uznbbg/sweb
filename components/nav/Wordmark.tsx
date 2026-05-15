import { cn } from '@/lib/utils'

type WordmarkProps = {
  className?: string
  /** Visual size. `sm` for top nav, `xs` for footer. */
  size?: 'xs' | 'sm'
}

/**
 * Lightweight CDA wordmark. Pure type — no logo file required.
 * Used in TopNav and (tiny variant) in Footer.
 */
export function Wordmark({ className, size = 'sm' }: WordmarkProps) {
  return (
    <span
      aria-label="CDA Sigorta"
      className={cn(
        'font-display font-semibold tracking-[-0.02em] leading-none select-none',
        size === 'xs' ? 'text-[11px]' : 'text-[15px]',
        className
      )}
    >
      <span className="opacity-100">CDA</span>
      <span className="opacity-60">.sigorta</span>
    </span>
  )
}

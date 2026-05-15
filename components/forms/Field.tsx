import { cn } from '@/lib/utils'

type FieldProps = {
  label: string
  htmlFor: string
  hint?: string
  optional?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * Form field wrapper — label on top, helper text below.
 * Apple-style labels: small, mid-gray, well above the control.
 */
export function Field({
  label,
  htmlFor,
  hint,
  optional,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between mb-2 text-[13px] font-medium text-apple-darkgray/85"
      >
        <span>{label}</span>
        {optional ? (
          <span className="text-[11px] font-normal text-apple-midgray">
            isteğe bağlı
          </span>
        ) : null}
      </label>
      {children}
      {hint ? (
        <p className="mt-2 text-[12px] text-apple-midgray">{hint}</p>
      ) : null}
    </div>
  )
}

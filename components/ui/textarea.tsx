import * as React from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[140px] w-full rounded-apple-card border border-apple-midgray/25 bg-white px-5 py-4 text-[17px] font-display text-apple-darkgray placeholder:text-apple-midgray transition-colors duration-200 ease-apple focus-visible:border-apple-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue/25 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }

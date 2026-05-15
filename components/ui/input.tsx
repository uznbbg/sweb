import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex h-12 w-full rounded-apple-pill border border-apple-midgray/30 bg-white px-6 text-[17px] font-display text-apple-darkgray placeholder:text-apple-midgray transition-colors duration-200 ease-apple focus-visible:border-apple-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue/30 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }

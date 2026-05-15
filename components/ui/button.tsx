import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-display whitespace-nowrap transition-colors duration-200 ease-apple disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-apple-blue text-white hover:bg-apple-blue-hover focus-visible:ring-offset-apple-offwhite',
        ghost:
          'bg-transparent text-apple-blue hover:text-apple-blue-hover',
        dark:
          'bg-white text-apple-darkgray hover:bg-apple-lightgray',
      },
      size: {
        pill: 'h-10 px-5 text-[14px] rounded-apple-pill',
        'pill-lg': 'h-12 px-7 text-[17px] rounded-apple-pill',
        inline: 'h-auto p-0 text-[17px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'pill',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

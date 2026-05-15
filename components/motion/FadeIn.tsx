'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  /** Optional class applied to the motion wrapper */
  className?: string
  /** Scroll-margin offset for viewport trigger. Defaults to '-80px'. */
  margin?: string
  /** y-distance the element travels in on mount. Defaults to 20px. */
  y?: number
}

export function FadeIn({
  children,
  delay = 0,
  className,
  margin = '-80px',
  y = 20,
}: FadeInProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

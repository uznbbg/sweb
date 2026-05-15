'use client'

import { motion, useReducedMotion } from 'framer-motion'

type StaggerWordsProps = {
  /** The string to split on spaces and animate per word. */
  text: string
  /** Tailwind classes applied to the outer heading wrapper. */
  className?: string
  /** Stagger delay between words (seconds). */
  stagger?: number
  /** Initial delay before the first word (seconds). */
  delay?: number
}

/**
 * Splits `text` on whitespace and reveals each word with a staggered y-translate.
 * Used for the hero h1 per the spec.
 */
export function StaggerWords({
  text,
  className,
  stagger = 0.06,
  delay = 0.1,
}: StaggerWordsProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

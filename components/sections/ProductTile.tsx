'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'

type ProductTileProps = {
  product: Product
}

/**
 * Single product tile. Client-side only for the hover lift +
 * shadow transition; the link primitives remain native <Link>s.
 */
export function ProductTile({ product }: ProductTileProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex h-[480px] flex-col overflow-hidden rounded-apple-tile bg-white transition-shadow duration-300 ease-apple hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Top text block */}
      <div className="px-8 pt-10 md:px-10 md:pt-12">
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-apple-midgray">
          {product.eyebrow}
        </p>
        <h3 className="mt-3 text-[32px] md:text-[40px] font-semibold leading-[1.1] tracking-[-0.01em] text-apple-darkgray">
          {product.title}
        </h3>
        <p className="mt-4 max-w-[36ch] text-[15px] md:text-[17px] leading-[1.47] text-apple-darkgray/80">
          {product.description}
        </p>
      </div>

      {/* Image fills remaining space */}
      <div className="relative mt-auto h-[180px] w-full overflow-hidden">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL={product.image.blurDataURL}
          className="object-cover"
        />
      </div>

      {/* Inline link row */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-7 px-8 pb-8 md:px-10 md:pb-10">
        <Link
          href={product.href}
          className="group/link inline-flex items-center gap-0.5 text-[15px] text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
        >
          Daha fazla
          <ChevronRight
            className="h-3.5 w-3.5 transition-transform duration-200 ease-apple group-hover/link:translate-x-0.5"
            strokeWidth={2}
          />
        </Link>
        <Link
          href={product.buyHref}
          className="group/link inline-flex items-center gap-0.5 text-[15px] text-apple-blue hover:text-apple-blue-hover transition-colors duration-200 ease-apple focus-visible:outline-none focus-visible:underline"
        >
          Satın al
          <ChevronRight
            className="h-3.5 w-3.5 transition-transform duration-200 ease-apple group-hover/link:translate-x-0.5"
            strokeWidth={2}
          />
        </Link>
      </div>
    </motion.article>
  )
}

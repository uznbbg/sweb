import { PRODUCTS } from '@/lib/products'
import { ProductTile } from '@/components/sections/ProductTile'
import { FadeIn } from '@/components/motion/FadeIn'

/**
 * 2×2 product grid on lightgray. Server component — only the tile's
 * hover motion is client-side.
 */
export function ProductGrid() {
  return (
    <section
      aria-labelledby="product-grid-title"
      className="bg-apple-lightgray"
    >
      <div className="mx-auto max-w-apple-wide px-6 py-20 md:px-8 md:py-28">
        <FadeIn>
          <h2
            id="product-grid-title"
            className="sr-only"
          >
            Ürünler
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {PRODUCTS.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.05}>
              <ProductTile product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Inter } from 'next/font/google'

/**
 * SF Pro Display setup (next/font/local).
 *
 * SF Pro is Apple's proprietary typeface and is NOT redistributed with this
 * repo. To enable it:
 *
 *   1. Drop the files into /public/fonts/:
 *        - SF-Pro-Display-Regular.woff2
 *        - SF-Pro-Display-Medium.woff2
 *        - SF-Pro-Display-Semibold.woff2
 *   2. Uncomment the `sfPro` export below.
 *   3. In app/layout.tsx, add `sfPro.variable` to the <html> className list.
 *
 * Until then Inter renders as the fallback (declared in tailwind.config.ts).
 */

// import localFont from 'next/font/local'
//
// export const sfPro = localFont({
//   src: [
//     { path: '../public/fonts/SF-Pro-Display-Regular.woff2',  weight: '400', style: 'normal' },
//     { path: '../public/fonts/SF-Pro-Display-Medium.woff2',   weight: '500', style: 'normal' },
//     { path: '../public/fonts/SF-Pro-Display-Semibold.woff2', weight: '600', style: 'normal' },
//   ],
//   variable: '--font-sf-pro',
//   display: 'swap',
//   fallback: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
// })

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

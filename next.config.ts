import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Project ships its own SVGs from /public/svg — no remote SVGs accepted.
    // CSP restricts inline scripts/styles inside SVGs (defense in depth).
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; style-src 'unsafe-inline';",
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2400],
    imageSizes: [16, 32, 48, 64, 80, 96, 128, 160, 192, 256, 320, 384, 480],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year for immutable assets
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig

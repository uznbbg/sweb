import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          white: '#FFFFFF',
          offwhite: '#FBFBFD',
          lightgray: '#F5F5F7',
          midgray: '#86868B',
          darkgray: '#1D1D1F',
          black: '#000000',
          blue: '#0071E3',
          'blue-hover': '#0077ED',
        },
      },
      fontFamily: {
        display: ['var(--font-sf-pro)', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'apple-card': '18px',
        'apple-tile': '22px',
        'apple-pill': '980px',
      },
      maxWidth: {
        apple: '980px',
        'apple-wide': '1440px',
      },
      letterSpacing: {
        'apple-tight': '-0.015em',
        'apple-snug': '-0.01em',
      },
      boxShadow: {
        'apple-hover': '0 4px 24px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        apple: '20px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'accordion-up': 'accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config

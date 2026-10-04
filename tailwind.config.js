/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6fa',
          100: '#e5eaf2',
          200: '#c5d2e3',
          300: '#9cb3d0',
          400: '#6d8ebd',
          500: '#1B2A4A', // Royal Deep Navy Brand Color
          600: '#17243f',
          700: '#131e34',
          800: '#0f1729',
          900: '#0a0f1b',
          DEFAULT: '#1B2A4A',
        },
        accent: {
          50: '#fdfbf5',
          100: '#fbf5e6',
          200: '#f5e7bf',
          300: '#edd48f',
          400: '#e3be5c',
          500: '#C9A84C', // Rich Warm Gold
          600: '#b89439',
          700: '#97772c',
          800: '#785d26',
          900: '#54401c',
          DEFAULT: '#C9A84C',
        },
        surface: {
          50: '#FFFFFF',
          DEFAULT: '#F9F8F5',
          alt: '#F3F1EC',
          dark: '#E8E5DC',
        },
        charcoal: {
          50: '#8c919a',
          DEFAULT: '#1F2937',
          light: '#374151',
          lighter: '#4B5563',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(27, 42, 74, 0.08), 0 4px 12px -2px rgba(27, 42, 74, 0.04)',
        'luxury-hover': '0 20px 40px -10px rgba(27, 42, 74, 0.14), 0 8px 18px -4px rgba(27, 42, 74, 0.08)',
        'gold-glow': '0 10px 25px -3px rgba(201, 168, 76, 0.35)',
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8D38A 50%, #C9A84C 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1B2A4A 0%, #121D34 100%)',
        'skeleton': 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      },
    },
  },
  plugins: [],
}

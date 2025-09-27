/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "./index.css",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-bg': '#1A1A1A',
        'paper-white': '#F4F4F4',
        'saffron-yellow': '#F4B400',
        'slate-text': '#E2E8F0',
        'heading-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'unfold': 'unfold 1s ease-out forwards',
        'draw-path': 'drawPath 2s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'fill-bar': 'fillBar 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        unfold: {
          '0%': { opacity: 0, transform: 'translateY(50px) scaleY(0)' },
          '100%': { opacity: 1, transform: 'translateY(0) scaleY(1)' },
        },
        drawPath: {
          'to': { strokeDashoffset: 0 },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fillBar: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
      }
    }
  },
  plugins: [],
}

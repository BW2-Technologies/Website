/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,md}",
    "./_layouts/**/*.html",
    "./_includes/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        bwgreen: {
          400: '#34d399',
          500: '#10b981',
        }
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 90deg at 50% 50%, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }
    }
  },
  plugins: [],
}
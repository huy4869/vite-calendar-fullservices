// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          '02' : 'var(--vt-c-white)'
        }
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'milano-red': '#A90E02',
        'lemon-chiffon': '#FFFBD4',
        'brand-bg': 'var(--bg-brand)',
        'brand-text': 'var(--text-brand)',
        'brand-border': 'var(--border-brand)',
      },
      fontFamily: {
        moara: ['Moara', 'serif'],
        arial: ['ArialCustomBold', 'Arial', 'sans-serif'],
        // Fallbacks to preserve existing page utility classes
        lumiare: ['Moara', 'serif'],
        eternalo: ['ArialCustomBold', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
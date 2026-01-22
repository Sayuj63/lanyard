/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ln-red': '#C00',
        'ln-blue': '#0056A3',
        'ln-yellow': '#FFD700',
        'ln-gray': '#F5F5F5',
        'border-gray': '#DDD',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
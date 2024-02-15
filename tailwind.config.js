/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EDF2F4',
          200: '#CED4DB',
          300: '#AFB9C3',
          400: '#909EA7',
          500: '#8D99AE',
          600: '#6E798F',
          700: '#4F596E',
          800: '#30384F',
          900: '#2B2D42',
        },
        highlight: {
          300: '#EF233C',
          500: '#D90429',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        custom: '500px 1fr',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

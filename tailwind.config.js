/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:   '#1a1a2e',
          blue:   '#006aff',
          purple: '#635bff',
          green:  '#00a651',
          gold:   '#e6a817',
          orange: '#f26522',
        },
      },
    },
  },
  plugins: [],
}


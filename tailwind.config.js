/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
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
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
        snug:    '-0.01em',
      },
    },
  },
  plugins: [],
}


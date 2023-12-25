/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#D0011B',
        footerTheme: '#fbfbfb',
        footerText: '#0000008a',
        footerInfoText: '#000000A6'
      }
    }
  },
  plugins: []
}

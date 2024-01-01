/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        main: '#D0011B',
        footerTheme: '#fbfbfb',
        footerText: '#0000008a',
        footerInfoText: '#000000A6',
        cartText: '#00000042',
        hoverText: '#d1d5db',
        hoverCart: '#d0011b14',
        mall: '#f5f5f5',
        textMall: '#000000CC',
        textInSort: '#555555'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    })
  ]
}

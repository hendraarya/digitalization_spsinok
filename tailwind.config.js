/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/**/*.{html,js}'], //means is file web will be saves in folder src & check in all folder src & check file with extensions .html .js
  theme: {
    extend: {
      spacing:{
        13: '3.25rem'
      },
      colors:{
        kopi: '#c0ff33',
        primary: '#14b8a6',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}

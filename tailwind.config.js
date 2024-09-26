/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}','./screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {colors: {
        customTeal: '#008080',
        splash:'#feffff',
        splash1:'#12171b'

      }},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding : '16px',
    },
    extend: {
      colors: {
        'primary' : '#6366f1',
        'dark' : '#0f172a',
        'third': '#7e22ce',
        'putbir card': '#E9F8F9',
      },
      fontFamily :{
        poiter : ['Poiret+One'],
        robboto : ['Roboto']

      },
      screens:{
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

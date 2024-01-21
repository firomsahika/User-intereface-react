/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'san-serif']
      },
      colors: {
        customBlue: '#a7bcff',
        bgColor:'#3e3c61',
      }
    }
  },
  plugins: [],
}


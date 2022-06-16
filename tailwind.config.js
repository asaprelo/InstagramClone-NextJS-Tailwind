module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '20': '20rem',
      },
      width:{
        '50': '50px'
      },
      height:{
        '50': '50px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

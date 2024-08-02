/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#F2F2F2',
        'buttonbgColor' :'#2B3844',
        'navbarBgColor':'#2B3844',
        'darkbgColor':'#2B3844',
        
      },
    },
  },
  plugins: [],
}



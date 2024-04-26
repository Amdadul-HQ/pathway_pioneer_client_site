/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat":['"Montserrat", sans-serif'],
        "Bebas":['"Bebas Neue", sans-serif']
      }
    },
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')],
}


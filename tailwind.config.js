/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        assets:{
          100:"#5C54E2",
          200:"#C66EFF"
        }
      },
    },
  },
  plugins: [],
}
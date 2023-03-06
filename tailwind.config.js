/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "Sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6B35EC",
        "dark-100": "#120E18",
        "dark-50": "#1E1727",
        gray: "#9D9CA3",
      }
    },
  },
  plugins: [],
}

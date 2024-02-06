/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["dark", "coffee"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}
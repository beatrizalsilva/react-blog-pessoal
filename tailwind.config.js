/** @type {import('tailwindcss').Config} */

export default {
  // criar minha própria estilização que não tem no tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Roboto", "sans-serif"]
    },
  },
  plugins: [],
}


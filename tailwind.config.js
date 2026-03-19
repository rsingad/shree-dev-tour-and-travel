/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#EAB308",
          DEFAULT: "#CA8A04",
          dark: "#A16207",
        },
      },
    },
  },
  plugins: [],
}
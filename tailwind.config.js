/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        western: ['Rye', 'cursive'],
      },
      colors: {
        marlboroRed: '#ff0000',
      },
    },
  },
  plugins: [],
}


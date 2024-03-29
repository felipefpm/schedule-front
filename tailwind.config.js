/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}


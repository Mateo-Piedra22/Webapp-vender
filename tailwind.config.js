/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          500: '#B87333',
          600: '#A65B2F'
        }
      }
    },
  },
  plugins: [],
}
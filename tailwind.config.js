/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "yellow-400": "#E2D703",
         "yellow-500": "#FFD233",
         "gray-bg": "#1E1E1E",
         "blue-bg": "#181826",
         "gray-icon": "#CCCCCC",
         "gray-text": "#999999"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "yellow-400": "#E2D703",
         "yellow-500": "#FFD233",
         "gray-bg": "#1E1E1E",
         "blue-bg": "#181826",
         "gray-icon": "#CCCCCC",
         "gray-text": "#999"
      },
      backgroundImage: {
        'banner': 'url("https://img.freepik.com/fotos-gratis/variedade-de-elementos-de-cinema-em-fundo-vermelho-com-espaco-de-copia_23-2148457848.jpg?w=996&t=st=1667474582~exp=1667475182~hmac=98a9b0b19511c46dd2e6394b91d5ea88ca1ef7af3493b6e81416117620037006")',
      
      }
    },
  },
  plugins: [],
}

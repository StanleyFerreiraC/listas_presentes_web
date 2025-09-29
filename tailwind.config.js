/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: { aria: '#F5F5F5', primary: '#ffffff', secundare: '#ffffff', pretty: '#6A6180' },
    },
  },
  plugins: [],
}
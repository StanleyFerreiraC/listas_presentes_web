/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Exemplo de cor primária (indigo-600)
        secundary: {
          100: "#A5B4FC", // Exemplo de secundária (indigo-300)
          200: "#818CF8", // Exemplo de secundária (indigo-400)
        },
        textHome: "#374151", // Exemplo de cor para texto (gray-700)
        pink: {
          100: "#FCE7F3", // rosa que você usa no bg da home
        },
        indigo: {
          900: "#312E81", // indigo que você usa no h1 da home
        },
      },
    },
  },
  plugins: [],
};

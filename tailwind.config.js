/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        bold: 700,
        black: 900,
      },
    },
  },
  variants: {
    extend: {
      fontStyle: ['responsive', 'hover', 'focus', 'italic'],
      translate: ['peer-focus', 'peer-placeholder-shown', 'peer-not-placeholder-shown'],
      fontSize: ['peer-focus', 'peer-placeholder-shown', 'peer-not-placeholder-shown'],
    },
  },
  plugins: [],
  
};


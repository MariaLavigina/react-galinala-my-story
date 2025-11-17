// tailwind.config.js
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'], // if you're using it
        roboto: ['"Roboto"', 'sans-serif'],        // if you want to define this too
      },
    },
  },
  plugins: [],
};
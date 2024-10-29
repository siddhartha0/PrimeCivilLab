/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    textDecoration: true,
  },
  theme: {
    colors: {
      brand: "#fa9a00",
      grey: "#E9E9E9",
      white: "#FFF",
      "fadish-white": "#cccccc",
      black: "#333333",
      "black-3": "#343434",
      "black-2": "#222222",
      "black-4": "#444444",

      "dark-blue": "#0F82FF",
      "fadish-blue": "#1B9AF7",
      "fade-blue": "#299FE2",
      "fadding-blue": "#79CAFF",

      "milky-green": "#01CD61",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    textDecoration: true,
  },
  theme: {
    colors: {
      white: "#FFF",
      bg: "#F8F8F8",
      "dark-blue": "#0F82FF",
      "fadish-blue": "#1B9AF7",
      "fade-blue": "#299FE2",
      "fadding-blue": "#79CAFF",

      yellow: "#FEAE1B",
      "milky-green": "#01CD61",
      black: {
        1000: "#000000",
        900: "#444444",
        800: "#5C5E5C",
        700: "#545454",
        600: "#C4CCC4",
      },

      "fadish-black": "#2b2c30",
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

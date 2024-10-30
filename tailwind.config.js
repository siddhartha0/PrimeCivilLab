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
      animation: {
        "clip-path-reveal":
          "clip-path-reveal 1s ease-out forwards, yellow-shadow 1s ease-out",
      },
      keyframes: {
        "clip-path-reveal": {
          "0%": {
            clipPath:
              "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)",
          },
          "100%": {
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 100%, 83% 100%, 31% 100%, 30% 78%, 0 78%)",
          },
        },
        "yellow-shadow": {
          "0%": {
            boxShadow: "0 0 0 rgba(250, 204, 21, 0)",
          },
          "50%": {
            boxShadow: "0 4px 6px -1px #fa9a00, 0 2px 4px -1px #fa9a00",
          },
          "100%": {
            boxShadow: "0 0 0 rgba(250, 204, 21, 0)",
          },
        },
      },
    },
  },

  plugins: [],
};

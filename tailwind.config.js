module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "ong-blue": {
          DEFAULT: "#9AC9FB",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#E8F3FE",
          400: "#C1DEFD",
          500: "#9AC9FB",
          600: "#64ACF9",
          700: "#2E8FF7",
          800: "#0973E4",
          900: "#0758AE",
        },
        "ong-red": {
          DEFAULT: "#DB5752",
          50: "#FBEBEA",
          100: "#F7DAD9",
          200: "#F0B9B7",
          300: "#E99996",
          400: "#E27874",
          500: "#DB5752",
          600: "#CB302A",
          700: "#9C2521",
          800: "#6E1A17",
          900: "#3F0F0D",
        },
        "ong-yellow": {
          DEFAULT: "#FAFA88",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFD",
          300: "#FDFDD6",
          400: "#FCFCAF",
          500: "#FAFA88",
          600: "#F8F852",
          700: "#F5F51C",
          800: "#D1D109",
          900: "#9B9B07",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

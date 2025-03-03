const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#1d1d1d",
        gray: {
          DEFAULT: "#4d4d4d",
        },
        blue: {
          DEFAULT: "#0057B7",
        },
        cyan: {
          DEFAULT: "#00E6E6",
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0057B7", // blue
            },
          },
        },
      },
    }),
  ],
};

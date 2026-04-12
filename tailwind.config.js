/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EEE6",
        burgundy: {
          DEFAULT: "#6B2737",
          light: "#F5E8EC",
          border: "#DDB8C0",
          muted: "#9B5A67",
        },
      },
    },
  },
  fontFamily: {
    main: ["Jost", "sans-serif"],
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

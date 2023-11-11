/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      // Primary
      "dark-cyan": "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",

      // Neutral
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: "Montserrat",
      serif: "Fraunces",
    },
  },
  plugins: [],
};

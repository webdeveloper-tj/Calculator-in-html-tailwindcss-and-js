/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      height: {
        500: "500px",
        screen95_1: "95.1vh",
        screen80_1: "50.1vh",
      },
    },
  },
  plugins: [],
};

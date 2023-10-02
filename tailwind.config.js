/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem", // Define your custom smaller text size here
        xsm: "0.7rem",
        mg: "1em",
        xxxs: "0.3rem",
      },
      lineHeight: {
        mg: "1.5em",
      },
      fontFamily: {
        author: ["CustomFont", "sans"], // Replace 'CustomFont' with your custom font's name
        biography: ["Custom Font", "Biography Serif"],
        movieshows: ["Helvetica Neue", "sans-serif"],
      },
      colors: {
        beige: "#E8C7C8",
        "accent-color": "#FFA500",
      },
    },
  },
  variants: {},
  plugins: [],
};

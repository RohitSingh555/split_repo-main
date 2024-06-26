/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Primarycolor: "#F29F2D",
      HeroSectionBackgroundColor: "#FDFDFF",
      IconColor: "#AC6503",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};

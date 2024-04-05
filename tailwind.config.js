/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#023047",
        primarySky: "#8ECAE6",
        primaryYellow: "#FFB703",
        primaryOrange: "#FB8500",
        easternBlue: "#219EBC",
        secondaryGreen: "#3DCC91",
        secondaryRed: "#FF5A5F",
        secondaryPurple: "#8338EC",
        secondaryPink: "#FF6B6B",
        secondaryGray: "#A8DADC",
        tertiaryDarkBlue: "#004E64",
        tertiaryLightBlue: "#78C0E0",
        tertiaryDarkYellow: "#B28451",
        tertiaryLightYellow: "#FFE8A3",
        tertiaryDarkGreen: "#15664F",
        tertiaryLightGreen: "#77B28C",
        bgc: "#FEFBF6",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        // Define more keyframes as needed
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInRight: "slideInRight 1.0s ease-out",
        slideInLeft: "slideInLeft 1.0s ease-out",
        slideInUp: "slideInUp 0.5s ease-out",
        slideInDown: "slideInDown 0.5s ease-out",
        // Define more animations as needed
      },
    },
  },
  plugins: [],
};

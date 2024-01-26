/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      padding: {
        primary: {
          x: "0.9375rem",
          y: "0.4rem",
        },
        dropdownOverlay: "0.25rem 0",
      },
      borderRadius: {
        button: "0.125rem",
        circleNumber: "6.25rem",
        dropdownOverlay: "0.25rem 0",
      },
      colors: {
        danger: "#FF4D4F",
        sideBar: "#262626",
        primary: {
          1: "#FF6D03",
          2: "#FF8B2B",
          3: "#FFF4E6",
          4: "#FFFFFF",
          5: "#856B54",
        },
        secondary: {
          1: "#556EE6",
          2: "#00CE9D",
          3: "#0386FF",
          4: "#BFBFBF",
          5: "#D9D9D9",
        },
        volcano: {
          1: "#FFD8BF",
          2: "#FA541C",
          3: "#818181",
        },
      },
      boxShadow: {
        dropShadow: "0px 0.625rem 1.25rem 0px rgba(18, 38, 63, 0.03)",
      },
      antdTable: {
        cellPaddingInline: "0.75rem",
        cellPaddingBlock: "0.75rem",
        headerSplitColor: "none",
      },
    },
  },
  plugins: [],
};

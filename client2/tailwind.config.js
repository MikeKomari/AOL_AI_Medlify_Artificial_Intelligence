/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2.25rem",
      "2xl": "4rem",
    },
    screens: {
      "4xl": { max: "1600px" },
      "3xl": { max: "1500px" },
      "2xl": { max: "1200px" },
      xl: { max: "1080px" },
      lg: { max: "900px" },
      md: { max: "600px" },
      sm: { max: "450px" },
    },
    lineHeight: {
      normal: "150%",
      md: "175%",
      lg: "200%",
    },
  },
  plugins: [],
};

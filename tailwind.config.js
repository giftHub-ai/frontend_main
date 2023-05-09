/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    float: ["responsive", "direction"],
    margin: ["responsive", "direction"],
    padding: ["responsive", "direction"],
  },
  theme: {
    colors: {
      background: "#FF5F9E",
      dark: "#B3005E",
      light: "#E90064",
      text: "#060047",
      green: "#008000",
      white: "#ffffff",
      interestHover: "#f8fafc",
    },

    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 1s steps(18) infinite alternate, blink 1s infinite",
      },
    },
  },
  plugins: [],
};

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
      yellowStar: "#f7db3c",
      interestHover: "#f8fafc",
      formBg: "#fbcfe8",
      orange: "#F59E0B",
      red: "#EF4444",
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
        load: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        typing: "typing 1s steps(18) infinite alternate, blink 1s infinite",
        loading: "load 1s infinite",
      },
      backgroundImage: {
        formBgImage: "url('/src/assets/AdobeStock_314884083.jpeg')",
        bgWave: "url('/src/assets/wave.png')",
        giftLoader: "url('/src/assets/giftLoader.gif')",
        giftLoadIcon: "url('/src/assets/giftLoadIcon.png')",
      },
    },
  },
  plugins: [],
};

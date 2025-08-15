/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10px",
      },
      colors: {
        primary: "#0025E8",
        secondary: "#6b7280",
      },
      // For buttons
      animation: {
        rollLoop: "rollLoop 1s ease-in-out infinite",
      },
      keyframes: {
        rollLoop: {
          "0%": { transform: "translateY(0%)" },
          "25%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0%)" },
          "75%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};

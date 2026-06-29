/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F1B2E",
        surface: "#2D2438",
        paper: "#FFF8F2",
        coral: "#FF6B5B",
        honey: "#FFC857",
        muted: "#8A8198",
        "ink-soft": "#423a52",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
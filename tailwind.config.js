/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      "red-100": "#e70a26",
      "red-60": "#d12d35",
      "cream-100": "#fff1ad",
      "cream-60": "#fffade",
      white: "#ffffff",
    },
    fontFamily: {
      righteous: ["Righteous", "cursive"],
      comfortaa: ["Comfortaa", "cursive"],
    },
  },
  plugins: [],
};

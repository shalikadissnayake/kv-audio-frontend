/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#FBFBFB",
        secondary: "#E8F9FF",
        accent: "#3674B5",
      },
    },
  },
  plugins: [],
};

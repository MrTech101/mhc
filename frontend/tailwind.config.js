/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004aad",
        secondary: "#ff6600",
        lightBlue: "#f0f8ff",
      },
    },
  },
  plugins: [],
}

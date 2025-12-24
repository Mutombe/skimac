/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F", // Deep Red
        secondary: "#212121", // Dark Charcoal
        accent: "#FFC107", // Amber/Gold for highlights
        neutral: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          800: "#424242",
          900: "#212121",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


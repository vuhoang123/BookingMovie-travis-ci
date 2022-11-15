/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      //   padding: "1rem",
      // default breakpoints but with 40px removed
      screens: {
        sm: "576px",
        md: "768px",
        lg: "922px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};

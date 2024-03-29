/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        "bg-blue": "#181A2A",
        "secondary-blue": "#4B6BFB",
        "fg-gray": "#242535",
      },
    },
  },
  plugins: [],
};

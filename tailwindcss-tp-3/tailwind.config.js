/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "gray-1" : "#333333",
        "gray-2" : "#4F4F4F",
        "gray-3" : "#828282",
      },
      fontSize: {
        "title": "2.5rem",
        "subtitle": "1.5rem",
        "body": "1rem",
      },
      fontWeight: {
        "normal": 400,
        "bold": 700,
      },
      borderRadius: {
        "none": "0",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "full": "9999px",
      },
      plugins: [],
    },
  }
};
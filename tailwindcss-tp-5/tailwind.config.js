/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "primary-light": "#f3f4f6",
        "secondary": "#F8FBF8",
        "background": "#FFFFFF",
        "border": "#d1d5db",
      },
      fontSize: {
        "title": "3.75rem",
        "subtitle": "1.5rem",
        "body": "1rem",
        "semi-title": "1.25rem",
        "button": "1.125rem",
      },
      fontWeight: {
        "thin": 250,
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
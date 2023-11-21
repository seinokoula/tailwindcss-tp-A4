/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0040e6",
        "secondary": "#333333",
        "tertiary": "#706f6e",
        "title": "000000",
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
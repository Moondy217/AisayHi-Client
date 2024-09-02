/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'borderRadius': '13px'
      },

      fontSize: {
        'fontSize24': '20px',
      },
    }
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
}


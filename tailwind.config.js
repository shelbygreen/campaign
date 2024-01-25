/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vgreen': '#209390',
        'cyellow': '#FFD478',
        'agreen': '#1f9390',
        'darkyellow': '#D7B364',
      },
    },
  },
  plugins: [],
}
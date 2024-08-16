/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vliteyellow': '#FEFCF7',
        'liteyellow': '#FFEABC',
        'vgreen': '#209390',
        'cyellow': '#FFD478',
        'agreen': '#1f9390',
        'darkyellow': '#D7B364',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
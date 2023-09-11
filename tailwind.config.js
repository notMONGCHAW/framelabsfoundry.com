/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#f17300',
        customPink: '#d90368',
        customBlue: '#97dffc',
      },
    },
  },
  variants: {},
  plugins: [],
}

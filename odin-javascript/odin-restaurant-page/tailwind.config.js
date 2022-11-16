/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'main': 'var(--bg-clr)',
      'main-alt': 'var(--bg-clr-alt)',
      'accent': 'var(--acc-clr)',
      'nav-clr': 'var(--nav-clr)',
      'black': '#000',
    },
  },
  plugins: [],
}

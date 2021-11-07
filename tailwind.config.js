const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [],
  purge: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    container: {
      padding: {
        '2xl': '12rem',
        DEFAULT: '1rem',
        lg: '4rem',
        sm: '2rem',
        xl: '5rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
}

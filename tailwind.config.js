// tailwind.config.js
module.exports = {
  darkMode: false,
  mode: 'jit',
  plugins: [],
  purge: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
  // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true // center all my container classes in my project
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

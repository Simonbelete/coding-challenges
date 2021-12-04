module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light_purple: '#8aafed',
        purple: "#23509c"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

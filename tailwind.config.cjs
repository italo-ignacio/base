/** @type {import('tailwindcss').Config} */

const colors = require('./src/presentation/styles/palettes/colors.json');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('checked', '&[data-state="checked"]');
    })
  ],

  theme: {
    colors,
    extend: {},
    variants: {}
  }
};

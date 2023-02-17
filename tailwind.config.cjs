/** @type {import('tailwindcss').Config} */

const colors = require('./src/presentation/styles/palettes/colors.json');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '*::-webkit-scrollbar': {
          width: '12px'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#343A40',
          borderRadius: '10px'
        },
        '*::-webkit-scrollbar-track-piece': {
          backgroundColor: '#E5E9EC',
          borderRadius: '10px',
          marginBottom: '1rem',
          marginTop: '5rem'
        }
      });
    })
  ],

  theme: {
    colors,
    extend: {
      animation: {
        big: 'big 0.3s ease-out'
      },
      boxShadow: {
        double: `inset 0 0 0 4px ${colors.red}, inset 0 0 0 8px ${colors.primary}`,
        inside: `inset 0 0 0 4px ${colors.red}`,
        outside: `inset 0 0 0 4px ${colors.primary}`
      },
      keyframes: {
        big: {
          '0%': { width: '5%' },
          '100%': { width: '30%' }
        }
      }
    },
    variants: {}
  }
};

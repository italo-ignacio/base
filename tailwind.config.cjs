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
          marginBottom: '0.5rem',
          marginTop: '0.5rem'
        },
        '.main::-webkit-scrollbar-track-piece': {
          marginBottom: '1rem',
          marginTop: '5rem'
        },
        '.filter::-webkit-scrollbar-track-piece': {
          backgroundColor: '#343A40'
        },
        '.filter::-webkit-scrollbar-thumb': {
          backgroundColor: '#F3F3F3',
          borderRadius: '10px'
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
      fontFamily: {
        montserrat: ['Montserrat']
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

/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.neutral,
        gray: {
          100: '#f2f3f5',
          200: '#ebedef',
          300: '#e3e5e8',
          400: '#d4d7dc',
          600: '#4f545c',
          700: '#36393f',
          800: '#2f3136',
          900: '#202225',
        },
      },
    },
  },
  plugins: [],
};

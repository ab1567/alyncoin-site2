const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Tailwind configuration for the AlynCoin site.
 *
 * Dark mode is class based so we can easily toggle dark backgrounds. We
 * extend the default color palette with a few custom colours used
 * throughout the site for highlights and accents. Forms plugin is
 * included for better styling of any form inputs.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#0d9488', // teal-600
          light: '#14b8a6', // teal-500
          dark: '#0f766e', // teal-700
        },
        highlight: '#6366f1', // indigo-500
        accent: '#a855f7', // purple-500
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
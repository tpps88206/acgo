import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5555ff',
        secondary: '#55aaff',
        danger: '#ff5555',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

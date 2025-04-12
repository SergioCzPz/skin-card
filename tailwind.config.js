/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      extend: {
        'text-black': '#333333',
        orange: '#FF7F50',
        yellow: '#FFEB3B',
        primary: {
          50: '#ECF1F3',
          100: '#D9E3E8',
          200: '#C6D5DC',
          300: '#B3C7D1',
          400: '#A0B9C5',
          500: '#4D6F7F',
          600: '#30454F',
          700: '#273740',
          800: '#1D2A30',
          900: '#131C20',
        },
        accent: {
          50: '#F1F6FA',
          100: '#E2ECF6',
          200: '#D4E3F1',
          300: '#C5D9EC',
          400: '#B7D0E7',
          500: '#8CB3D9',
          600: '#2C5A86',
          700: '#214365',
          800: '#162D43',
          900: '#0B1622',
        },
        backgroud: {
          50: '#F9F9F9',
          100: '#F8F8F8',
          200: '#F7F7F7',
          300: '#F6F6F6',
          400: '#F5F5F5',
          500: '#F2F2F2',
          600: '#E8E8E8',
          700: '#C1C1C1',
          800: '#AEAEAE',
          900: '#9B9B9B',
        },
      },
    },
  },
  plugins: [],
};

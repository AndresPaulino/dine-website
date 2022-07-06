/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-beaver': '#9E7F66',
        'primary-gray': '#111111',
        'secondary-mirage': '#17192B',
        'secondary-clay': '#242B37',
        'secondary-gray': '#5c6779',
      },
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        sm: '17px',
        md: '20px',
        lg: '48px',
        xl: '80px',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semi: 600,
        bold: 700,
      },
      lineHeight: {
        sm: '28px',
        md: '24px',
        lg: '48px',
        xl: '80px',
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      },
    },
    plugins: [],
  },
};

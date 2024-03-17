/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'incedo-primary': {
        100: '#fac8bd',
        600: '#FF8C39',
        900: '#EE4923'
      },
      'incedo-secondary': {
        100: '#d5dfef',
        300: '#2F5FAF',
        600: '#1B3663',
        900: '#0D1A30',
      },
      'incedo-tertiary': {
        600: '#D2CFD1',
        900: '#464545'
      },
    },
  },
  plugins: [],
});


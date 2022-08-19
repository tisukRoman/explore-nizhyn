/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#212529',
        green: '#77975e',
      },
      spacing: {
        128: '32rem',
        146: '36rem',
        152: '38rem',
        160: '40rem',
        168: '42rem',
      },
      transitionDuration: {
        DEFAULT: '500ms',
      },
    },
  },
  plugins: [],
};

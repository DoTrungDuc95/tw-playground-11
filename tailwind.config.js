/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#2F6C6D',
        hummingBird: '#d1f1ee',
        yellow: '#e4d63b',
        solitude: '#e9e9ea',
        gray: '#4B4B4C',
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%,100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      // By default it's desktop-first, so no need to define 'desktop'
      tb: '768px',      // Tablet breakpoint
      db: '1024px', // Desktop breakpoint
    },
  },
  plugins: [],
};

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
      sm: '640px',
      md: '768px',
      tb: '820px',
      db: '1024px',
      lg: '1280px',
      xl: '1536px'
    }
  },
  plugins: [],
};

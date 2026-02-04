/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(15, 23, 42, 0.45)',
        lift: '0 20px 45px -25px rgba(15, 23, 42, 0.55)',
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

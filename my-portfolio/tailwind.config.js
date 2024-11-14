/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#7477FF',
        textAccent: '#7477FF',
      },
    },
    fontFamily: {
      'primary': ['font-text-primary', 'sans-serif'],
      'secondary': ['font-text-secondary', 'sans-serif'],
      'ternary': ['font-text-ternary', 'sans-serif'],
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '769px',
      // => @media (min-width: 769px) { ... }
      
      'bmd': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'lg': '990px',
      // => @media (min-width: 990px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#F1F8FE',
        DarkBlue: '#0c2534',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        quattro: ['"Quattrocento Sans"', 'sans-serif'],
        robomono: ['"Roboto Mono"', 'monospace'],
      },
       boxShadow: {
        'custom-deep': '0px 4px 16px rgba(17, 17, 26, 0.05), 0px 8px 32px rgba(17, 17, 26, 0.05)',
      },
  keyframes: {
  moveUp: {
    "0%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(-600%)" },
  },
},
animation: {
  moveUp: "moveUp 50s linear infinite", 
},



    },
  },
  plugins: [],
};

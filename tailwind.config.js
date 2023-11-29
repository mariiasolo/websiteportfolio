/** @type {import('tailwindcss').Config} */
//special thanks to codebucks fro the tailwind crush course 

const {fontFamily} = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    // Or if using `src` directory:
   
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#F8F6F4",
        primary: "#7447e6", 
        primaryDark: "#99FFCD", 
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }, 
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F8F6F4 5px, #F8F6F4 100px )',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px )',
        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F8F6F4 5px, #F8F6F4 80px )',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 80px )'
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
  
}


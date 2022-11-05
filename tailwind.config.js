/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
        
          "primary": "#d80676",
          
 "secondary": "#ffade1",
          
 "accent": "#c117ad",
          
 "neutral": "#1D2025",
          
 "base-100": "#30373B",
          
 "info": "#778FDF",
          
 "success": "#1DAA58",
          
 "warning": "#A55909",
          
 "error": "#E23269",
          },
      },
      {
        light: {
        
          "primary": "#ced633",
          
 "secondary": "#336896",
          
 "accent": "#79a512",
          
 "neutral": "#282939",
          
 "base-100": "#EAF1F6",
          
 "info": "#A2C1E2",
          
 "success": "#1ED27E",
          
 "warning": "#F4B515",
          
 "error": "#F26363",
          },
      },
    ],
    
  },
  plugins: [require("daisyui")],
}

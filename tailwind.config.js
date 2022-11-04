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
        
          "primary": "#be7be5",
          
          "secondary": "#eaa6ed",
                   
          "accent": "#e8b07f",
                   
          "neutral": "#231D25",
                   
          "base-100": "#F2ECF3",
                   
          "info": "#58B9E9",
                   
          "success": "#40E7A5",
                   
          "warning": "#F7C75F",
                   
          "error": "#FB3C23",
                   },
      },
    ],
    
  },
  plugins: [require("daisyui")],
}

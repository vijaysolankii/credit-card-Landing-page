/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontSize: {
        'h1': '5.5rem', 
        'h2': '4.5rem', 
        'h3': '3.28rem', 
        'h4': '2.46rem', 
        'h5': '1.84rem', 
        
      },
      lineHeight: {
        'DEFAULT': '1.25', 
      },
      colors:{
        pink : {
          DEFAULT : '#F637EC',
          dark : '#6f236b',
        },
        dark : {
          DEFAULT : "#151515",
          light : "#292929"
        }
      },
      fontFamily:{
        inter : 'Inter,sans-serif',
      },
      backgroundImage: {
        'select-img': "url('./images/chevron-down.svg')",
      }
    },
  },
  plugins: [],
}
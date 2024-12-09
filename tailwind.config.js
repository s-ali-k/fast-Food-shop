/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      backgroundImage: {  
        'custom-gradient': 'linear-gradient(90deg, rgba(248, 107, 29, 1) 0%, rgba(230, 59, 59, 1) 50%, rgba(248, 107, 29, 1) 88%, rgba(230, 104, 2, 1) 100%, rgba(226, 109, 7, 1) 100%)',  
      },  
    },
  },
  plugins: [],
}



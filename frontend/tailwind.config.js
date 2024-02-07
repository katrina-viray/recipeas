/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      'sm': '80%', // => @media (min-width: 640px) { ... }
      'md': '100%', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1600px', // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'main-purple':'#635BFF',
        'second-purple':'#B55BFF',
        'main-blue':'#5BA5FF',
        'main-gray':'#D6D4D4',
        'breakfast-color':'#0CEAD9', 
        'lunch-color':'#3ACADF', 
        'dinner-color':'#729EFD', 
        'dessert-color':'#8A64D6', 
        'snack-color':'#5C3A92', 
      }
    },
  },
  plugins: [],
}


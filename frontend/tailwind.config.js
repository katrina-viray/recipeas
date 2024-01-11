/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'main-purple':'#635BFF',
        'second-purple':'#B55BFF',
        'main-blue':'#5BA5FF',
      }
    },
  },
  plugins: [],
}


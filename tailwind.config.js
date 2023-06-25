/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#4285F4',
      'secondary': '#7FBA00',
      'neutral-1' : '#797979',
      'neutral-2' : '#404040',
      'dark-blue': '#003366',
      'dark-green': '74A903',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


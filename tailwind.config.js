/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: '#25F321',
        lightBlue:'#2196F399'
      }
    },
  },
  plugins: [],
}
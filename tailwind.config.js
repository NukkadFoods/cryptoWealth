/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9',
        secondary: '#8b5cf6',
        dark: '#1e293b',
        light: '#f8fafc'
      }
    },
  },
  plugins: [],
}

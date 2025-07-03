/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        primary: '#9A86FF',
        secondary: '#7B9DFF',
        accent: '#5C4DFF',
        'accent-hover': '#373FFF',
        link: '#4A6CFF',
        border: 'rgba(123, 157, 255, 0.3)',
        'button-shadow': 'rgba(92, 77, 255, 0.5)',
      },
      boxShadow: {
        'button': '0 4px 15px rgba(92, 77, 255, 0.5)',
        'button-hover': '0 6px 20px rgba(92, 77, 255, 0.7)',
      }
    },
  },
  plugins: [],
}
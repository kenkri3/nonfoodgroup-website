/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d8a4e',
        'primary-dark': '#1f6b3a',
        dark: '#1a1a1a',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}

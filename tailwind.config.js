/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./services.html",
    "./cases.html",
    "./team.html",
    "./contact.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        orange: {
          400: '#fb923c',
          500: '#f97316'
        },
        blue: {
          900: '#1e3a8a'
        }
      }
    },
  },
  plugins: [],
}

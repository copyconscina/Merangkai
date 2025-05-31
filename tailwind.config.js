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
       keyframes: {
      move1: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(50px, -30px)' },
      },
      move2: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-60px, 40px)' },
      },
      move3: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(30px, -60px)' },
      },
    },
    animation: {
      move1: 'move1 10s ease-in-out infinite',
      move2: 'move2 12s ease-in-out infinite',
      move3: 'move3 15s ease-in-out infinite',
    },
    },
  },
  plugins: [],
}

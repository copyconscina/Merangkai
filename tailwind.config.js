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
       animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}

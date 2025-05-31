// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [ // <--- THIS PART IS CRUCIAL
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
      },
      animation: {
        // These are the specific animation definitions for your orbs
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 10s ease-in-out infinite',
        'float-fast': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        // This defines the 'float' movement that your orbs are using
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(10px)' },
          '50%': { transform: 'translateY(10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-5px) translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'], // Ensure Cinzel is already configured
      },
      animation: {
        // Add these specific animation definitions for your orbs
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 10s ease-in-out infinite',
        'float-fast': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        // Add these keyframes that define the 'float' movement
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

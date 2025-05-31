// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        move1: 'move1 30s ease-in-out infinite',
        move2: 'move2 35s ease-in-out infinite',
        move3: 'move3 40s ease-in-out infinite',
      },
      keyframes: {
        move1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, -150px)' },
        },
        move2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-120px, 100px)' },
        },
        move3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(200px, 100px)' },
        },
      },
    },
  },
  plugins: [],
};

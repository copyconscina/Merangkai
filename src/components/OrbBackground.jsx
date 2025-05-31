import React from 'react';

export default function OrbBackground() {
  return (
    <>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-orbMove1 z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-20 animate-orbMove2 z-0"></div>

      <style jsx>{`
        @keyframes orbMove1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.1); }
        }

        @keyframes orbMove2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.1); }
        }

        .animate-orbMove1 {
          animation: orbMove1 20s ease-in-out infinite;
        }

        .animate-orbMove2 {
          animation: orbMove2 25s ease-in-out infinite;
        }
      `}</style>
    </>
  );

}

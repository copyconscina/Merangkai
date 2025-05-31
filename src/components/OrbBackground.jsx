import React from 'react';

export default function OrbBackground({ opacity = 0.1 }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-orange-400 opacity-30 animate-move1"
        style={{ top: '10%', left: '15%' }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-blue-500 opacity-30 animate-move2"
        style={{ top: '50%', left: '40%' }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-green-300 opacity-30 animate-move3"
        style={{ top: '20%', left: '70%' }}
      />
    </div>
  );
}

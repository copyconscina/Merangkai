import React from 'react';

export default function BlurryBalls() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute w-72 h-72 bg-orange-400 rounded-full filter blur-3xl opacity-30 animate-move1"></div>
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-move2"></div>
      <div className="absolute w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-move3"></div>
    </div>
  );
}

import React from 'react';

export default function OrbBackground({ opacity = 0.1 }) {
  // ubah angka opacity untuk blur ball supaya bisa dikontrol dari luar
  // misal 0.1 = 10% opacity = transparansi 90%
  const styleOpacity = opacity;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Orange ball */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-orange-400 animate-move1"
        style={{ top: '10%', left: '15%', opacity: styleOpacity }}
      />
      {/* Blue ball */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-blue-500 animate-move2"
        style={{ top: '50%', left: '40%', opacity: styleOpacity }}
      />
      {/* Green ball */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-green-400 animate-move3"
        style={{ top: '20%', left: '70%', opacity: styleOpacity }}
      />
    </div>
  );
}

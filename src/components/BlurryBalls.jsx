// src/components/BlurryBalls.jsx
export default function BlurryBalls() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-96 h-96 bg-orange-500 opacity-30 rounded-full blur-3xl animate-move1"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl animate-move2"></div>
      <div className="absolute w-96 h-96 bg-green-300 opacity-30 rounded-full blur-3xl animate-move3"></div>
    </div>
  );
}

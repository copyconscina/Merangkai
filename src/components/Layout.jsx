import React from 'react';
import OrbBackground from './OrbBackground';

export default function Layout({ children }) {
  return (
    <div className="bg-black text-gray-300 font-lora min-h-screen overflow-hidden relative">
      <OrbBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-medium tracking-tight text-orange-400">Merangkai</h1>
          <ul className="flex space-x-6 text-sm uppercase tracking-wide">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
          </ul>
        </div>
      </nav>

      <main className="relative z-10">{children}</main>
    </div>
  );
}
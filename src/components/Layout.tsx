import React from 'react';
import OrbBackground from './OrbBackground';

<<<<<<< HEAD
export default function Layout({ children }) {
=======
export default function Layout({ children }: { children: React.ReactNode }) {
>>>>>>> 328f5c43d7a936d8ade9c04bcb9ffa2e47d18715
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
            <li><a href="/services" className="hover:text-orange-400 transition-colors">Services</a></li>
            <li><a href="/cases" className="hover:text-orange-400 transition-colors">Cases</a></li>
            <li><a href="/team" className="hover:text-orange-400 transition-colors">Team</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="relative z-10">{children}</main>

      <footer className="py-10 px-6 border-t border-gray-800 text-center text-gray-600 text-sm mt-24">
        <p>&copy; 2025 Merangkai. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 328f5c43d7a936d8ade9c04bcb9ffa2e47d18715

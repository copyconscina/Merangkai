import { Link } from 'react-router-dom';
import OrbBackground from './OrbBackground';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black font-sans text-white overflow-hidden">
      {/* BG balls */}
      <OrbBackground />

      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-60 z-50 backdrop-blur-md">
        <h1 className="text-xl font-cinzel text-orange-400">Merangkai</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/services" className="hover:text-orange-400">Services</Link>
          <Link to="/gallery" className="hover:text-orange-400">Gallery</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </nav>
      </header>

      {/* Main content with 90% opacity */}
      <main className="pt-28 relative z-10 bg-black bg-opacity-60 backdrop-blur-sm">
        {children}
      </main>
    </div>
  );
}

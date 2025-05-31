import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white font-sans">
      {/* Blurry Background Balls */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500 rounded-full blur-3xl opacity-30 animate-move1 z-0" style={{ top: '-100px', left: '-100px' }} />
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-30 animate-move2 z-0" style={{ bottom: '-100px', right: '-100px' }} />
      <div className="absolute w-[300px] h-[300px] bg-green-300 rounded-full blur-3xl opacity-20 animate-move3 z-0" style={{ top: '50%', left: '30%' }} />

      {/* Navbar/Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 z-50">
        <h1 className="text-xl font-cinzel text-orange-400">Merangkai</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/services" className="hover:text-orange-400">Services</Link>
          <Link to="/gallery" className="hover:text-orange-400">Gallery</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="relative z-10 pt-28">
        {children}
      </main>
    </div>
  );
}

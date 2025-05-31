import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 🔵🟠🟢 Blurry Balls Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-400 opacity-30 rounded-full blur-3xl animate-float-slow top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl animate-float-fast top-1/3 left-2/3"></div>
        <div className="absolute w-72 h-72 bg-green-300 opacity-25 rounded-full blur-3xl animate-float-medium top-2/3 left-1/4"></div>
      </div>

      {/* Header */}
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

      <main className="pt-28">{children}</main>
    </div>
  );
}


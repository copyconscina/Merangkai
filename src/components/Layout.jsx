// src/components/Layout.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* Blurry Animated Background Orbs (as previously defined) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-400 opacity-80 rounded-full blur-lg animate-float-slow top-10 left-10" />
        <div className="absolute w-80 h-80 bg-blue-500 opacity-80 rounded-full blur-lg animate-float-fast top-1/3 left-2/3" />
        <div className="absolute w-72 h-72 bg-green-300 opacity-80 rounded-full blur-lg animate-float-medium top-2/3 left-1/4" />
      </div>

      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 z-50">
        <h1 className="text-xl font-cinzel text-orange-400">Merangkai</h1>
        <nav className="space-x-4">
          <Link className="hover:text-orange-400" to="/">Home</Link>
          <Link className="hover:text-orange-400" to="/about">About</Link>
          <Link className="hover:text-orange-400" to="/services">Services</Link>
          <Link className="hover:text-orange-400" to="/gallery">Gallery</Link>
          <Link className="hover:text-orange-400" to="/contact">Contact</Link>
          <Link className="hover:text-orange-400" to="/shop">Shop</Link> {/* <--- Add this link */}
        </nav>
      </header>

      <main className="pt-28">
        {children}
      </main>
    </div>
  );
};

export default Layout;
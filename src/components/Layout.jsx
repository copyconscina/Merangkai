// src/components/Layout.jsx - DEFINITIVE COMPLETE LAYOUT

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is here

const Layout = ({ children }) => {
  return (
    // Main container: relative for absolute children, min-h-screen for full height, overflow-hidden
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* START: Blurry Animated Background Orbs */}
      {/* This container uses 'absolute inset-0' and -z-10 to be behind content. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* These are your individual orbs with 'float' animations, with adjusted opacity and blur */}
        <div className="absolute w-96 h-96 bg-orange-400 opacity-80 rounded-full blur-lg animate-float-slow top-10 left-10" />
        <div className="absolute w-80 h-80 bg-blue-500 opacity-80 rounded-full blur-lg animate-float-fast top-1/3 left-2/3" />
        <div className="absolute w-72 h-72 bg-green-300 opacity-80 rounded-full blur-lg animate-float-medium top-2/3 left-1/4" />
      </div>
      {/* END: Blurry Animated Background Orbs */}

      {/* START: Your Existing Header Structure */}
      {/* This header is fixed to the top and layered above the orbs (z-50) */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 z-50">
        <h1 className="text-xl font-cinzel text-orange-400">Merangkai</h1>
        <nav className="space-x-4">
          {/* These are your existing 'a' tag links, using React Router's Link for navigation */}
          <Link className="hover:text-orange-400" to="/">Home</Link>
          <Link className="hover:text-orange-400" to="/about">About</Link>
          <Link className="hover:text-orange-400" to="/services">Services</Link>
          <Link className="hover:text-orange-400" to="/gallery">Gallery</Link>
          <Link className="hover:text-orange-400" to="/contact">Contact</Link>
        </nav>
      </header>
      {/* END: Your Existing Header Structure */}

      {/* START: Main Content Area */}
      {/* pt-28 ensures content starts below your fixed header height */}
      <main className="pt-28">
        {children} {/* This is where your individual page content renders */}
      </main>
      {/* END: Main Content Area */}
    </div>
  );
};

export default Layout;
// src/components/Layout.jsx

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// Ensure you have all these Lucide Icons imported. Add them if any are missing:
import { Home, Info, Briefcase, Image, Mail } from 'lucide-react'; 

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    // This is the outermost container for the entire layout.
    // It sets the min-height, default background/text color, and prepares for fixed/absolute positioning.
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* START: Blurry Animated Background Orbs */}
      {/* This div is fixed to the viewport, spans full width/height, and is pushed to the very back (-z-10). */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Each orb is an absolutely positioned div, sized, colored, blurred, semi-transparent, and animating. */}
        <div className="absolute w-96 h-96 bg-orange-400 rounded-full filter blur-3xl opacity-30 animate-pulse left-[10%] top-[20%]" />
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-pulse left-[50%] top-[10%]" />
        <div className="absolute w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-pulse left-[30%] top-[60%]" />
      </div>
      {/* END: Blurry Animated Background Orbs */}

      {/* START: Fixed Header Navigation */}
      {/* This header is fixed to the top, spans full width, and is layered above the orbs (z-50). */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Site Title/Logo */}
          <NavLink to="/" className="text-2xl font-serif text-white hover:text-orange-400 transition-colors duration-300">
            Merangkai
          </NavLink>
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`
                }
              >
                <Home size={20} />
                <span className="hidden sm:inline">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`
                }
              >
                <Info size={20} />
                <span className="hidden sm:inline">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`
                }
              >
                <Briefcase size={20} />
                <span className="hidden sm:inline">Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`
                }
              >
                <Image size={20} />
                <span className="hidden sm:inline">Gallery</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`
                }
              >
                <Mail size={20} />
                <span className="hidden sm:inline">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* END: Fixed Header Navigation */}

      {/* Main Content Area */}
      {/* This main element provides padding at the top (pt-20) to ensure content starts below the fixed header. */}
      {/* relative z-10 ensures content is above the -z-10 background orbs. */}
      <main className="pt-20 pb-8 relative z-10">
        {children} {/* This is where the content of your individual pages (Home, About, etc.) will be rendered. */}
      </main>
    </div>
  );
};

export default Layout;
// src/components/Layout.jsx - FULL LAYOUT WITH BLURRY BACKGROUND

import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for your existing 'a' tag header
// No need for Lucide Icons in this version of the header

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* TEMPORARY CHANGE: INCREASE OPACITY AND REDUCE BLUR/REMOVE BLUR FOR TESTING */}
        <div className="absolute w-96 h-96 bg-orange-400 opacity-80 rounded-full blur-lg animate-float-slow left-[10%] top-[20%]" /> {/* Changed opacity-30 to opacity-80, blur-3xl to blur-lg */}
        <div className="absolute w-80 h-80 bg-blue-500 opacity-80 rounded-full blur-lg animate-float-fast left-[50%] top-[10%]" />   {/* Changed opacity-20 to opacity-80, blur-3xl to blur-lg */}
        <div className="absolute w-72 h-72 bg-green-300 opacity-80 rounded-full blur-lg animate-float-medium left-[30%] top-[60%]" /> {/* Changed opacity-25 to opacity-80, blur-3xl to blur-lg */}
      </div>

      {/* ... (rest of your layout) ... */}
    </div>
  );
};

export default Layout;
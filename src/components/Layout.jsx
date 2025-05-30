import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-4 shadow-md">
        <h1 className="text-2xl font-cinzel">Merangkai</h1>
      </header>

      <main className="p-4">
        {children}
      </main>

      <footer className="p-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Merangkai. All rights reserved.
      </footer>
    </div>
  );
}

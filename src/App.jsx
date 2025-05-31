// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Your Layout import
import Home from './pages/Home';
// ... other page imports ...

function App() {
  return (
    <Router>
      {/* TEMPORARY TAILWIND TEST DIV - Add this */}
      <div className="bg-red-500 text-white p-4 text-center font-bold text-3xl">
        TAILWIND TEST
      </div>
      {/* END TEMPORARY TAILWIND TEST DIV */}

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... other routes ... */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
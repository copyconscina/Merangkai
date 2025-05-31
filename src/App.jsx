// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About'; // Assuming you have these pages
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Shop from './pages/Shop'; // <--- Add this import

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} /> {/* <--- Add this route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
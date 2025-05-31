import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import CustomGallery from './components/Gallery.jsx'; // pastikan file ini ada
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<CustomGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

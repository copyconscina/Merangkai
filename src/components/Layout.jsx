import React from 'react';
import Gallery from './Gallery';
import { motion } from 'framer-motion';
import Gallery from './components/Gallery.jsx';

export default function App() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-6 text-center"
      >
        <h1 className="font-cinzel text-4xl md:text-6xl leading-tight mb-6 text-white">
          Cultivate Your Inner Garden
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Merangkai offers curated experiences for mindfulness, growth, and self-discovery.
        </p>
        <a
          href="/about"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-orange-500 text-black font-medium shadow-lg hover:bg-orange-400 transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </motion.section>

      <Gallery />
    </Layout>
  );
}

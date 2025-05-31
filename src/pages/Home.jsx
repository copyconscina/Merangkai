// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-20 text-center min-h-[calc(100vh-100px)] flex flex-col justify-center"
    >
      <h1 className="text-6xl md:text-8xl font-serif text-orange-400 mb-8 tracking-tight">
        Merangkai
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Cultivating inner peace and connection through mindful living and curated experiences.
      </p>
      <motion.a
        href="/about"
        className="mt-12 inline-block bg-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg
                   hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Explore Your Journey
      </motion.a>
    </motion.section>
  );
};

export default Home;
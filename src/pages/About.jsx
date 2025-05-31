// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-5xl font-serif text-center mb-12 text-orange-400">
        Our Philosophy
      </h1>

      <div className="max-w-4xl mx-auto text-lg text-gray-300 space-y-8">
        <p>
          At Merangkai, we believe in the profound power of self-care to transform lives. In a world of constant motion, finding moments of tranquility and introspection is more vital than ever. Merangkai, meaning "to arrange" or "to compose" in Indonesian, reflects our dedication to helping you compose a life of balance, mindfulness, and personal growth.
        </p>
        <p>
          Our journey began with a simple idea: to create a space where individuals can discover resources, practices, and products that foster well-being. We curate experiences that encourage you to slow down, connect with your inner self, and cultivate a deeper understanding of your needs.
        </p>
        <p>
          Through a blend of ancient wisdom and modern approaches, Merangkai offers a holistic path to self-discovery. We are passionate about empowering you to craft a life filled with purpose, peace, and vibrant energy. Join us as we explore the art of mindful living, one conscious moment at a time.
        </p>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src="https://placehold.co/600x400/262626/ECE7DF?text=Merangkai+Vision"
            alt="Our Vision"
            className="rounded-lg shadow-xl mx-auto mb-6 max-w-full h-auto"
          />
          <p className="text-gray-400 text-sm italic">
            "Composing a life of balance, mindfulness, and personal growth."
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
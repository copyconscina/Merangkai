// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: '🧘', // Emoji for simplicity; consider Lucide icons for final design
    title: 'Mindfulness Coaching',
    description: 'Personalized guidance to cultivate presence and reduce stress.',
    color: 'text-blue-400'
  },
  {
    icon: '✍️',
    title: 'Creative Expression Workshops',
    description: 'Unlock your inner artist through guided journaling, painting, and more.',
    color: 'text-orange-400'
  },
  {
    icon: '🌱',
    title: 'Holistic Wellness Consultations',
    description: 'Integrative approach to balance mind, body, and spirit.',
    color: 'text-green-400' // Using green accent from Future Memories
  },
  {
    icon: '🍵',
    title: 'Aromatherapy & Herbal Blends',
    description: 'Custom blends to support relaxation, energy, and focus.',
    color: 'text-orange-400'
  },
  {
    icon: '✨',
    title: 'Digital Well-being Programs',
    description: 'Strategies to create healthy boundaries with technology.',
    color: 'text-blue-400'
  },
  {
    icon: '📚',
    title: 'Guided Reading & Reflection',
    description: 'Curated literary journeys for personal development.',
    color: 'text-green-400'
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-5xl font-serif text-center mb-12 text-orange-400">
        Our Offerings
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-300">
        Explore a range of services designed to support your personal growth and well-being journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg
                       transform transition-transform duration-300 hover:scale-[1.02]
                       text-center"
          >
            <div className={`text-6xl mb-4 ${service.color}`}>{service.icon}</div>
            <h3 className="text-3xl font-serif text-white mb-4">{service.title}</h3>
            <p className="text-gray-300 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
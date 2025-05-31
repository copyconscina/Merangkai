// src/pages/Shop.jsx
import React from 'react';
import { motion } from 'framer-motion'; // For scroll-fade-in animation

// Placeholder product data
const products = [
  {
    id: 1,
    name: 'Mindful Journal',
    price: 'Rp 150.000',
    image: 'https://placehold.co/400x400/262626/ECE7DF?text=Journal', // Beige accent
    description: 'A beautifully crafted journal for daily reflection and mindfulness.',
  },
  {
    id: 2,
    name: 'Aromatherapy Diffuser',
    price: 'Rp 350.000',
    image: 'https://placehold.co/400x400/262626/5982F6?text=Diffuser', // Blue accent
    description: 'Enhance your space with calming essential oil aromas.',
  },
  {
    id: 3,
    name: 'Guided Meditation Set',
    price: 'Rp 280.000',
    image: 'https://placehold.co/400x400/262626/44A367?text=Meditation', // Green accent
    description: 'Audio series and tools for deep relaxation and focus.',
  },
  {
    id: 4,
    name: 'Herbal Tea Collection',
    price: 'Rp 120.000',
    image: 'https://placehold.co/400x400/262626/B44C19?text=Tea', // Orange accent
    description: 'A selection of soothing teas for evening tranquility.',
  },
  {
    id: 5,
    name: 'Comfort Blanket',
    price: 'Rp 400.000',
    image: 'https://placehold.co/400x400/262626/ECE7DF?text=Blanket',
    description: 'Soft and cozy, perfect for your self-care rituals.',
  },
  {
    id: 6,
    name: 'Digital Detox Kit',
    price: 'Rp 200.000',
    image: 'https://placehold.co/400x400/262626/5982F6?text=Detox+Kit',
    description: 'Tools and guides to help you disconnect and recharge.',
  },
];

const Shop = () => {
  return (
    <motion.section
      // Mimics FadeInOnScrollWrapper_wrapper__4Hr6H
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-12" // Padding and centered content
    >
      <h1 className="text-5xl font-serif text-center mb-12 text-orange-400">
        Merangkai Shop
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-white">
        Discover curated items to enhance your self-care journey. Each product is thoughtfully selected to bring tranquility and inspiration into your life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            // Subtle fade-in for each card
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden
                       transform transition-transform duration-300 hover:scale-[1.02]
                       flex flex-col" // Flex column to push button to bottom
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover" // Fixed height for images
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/777777/FFFFFF?text=Image+Error'; }}
            />
            <div className="p-6 flex-grow"> {/* flex-grow to take available space */}
              <h3 className="text-2xl font-serif text-blue-400 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow"> {/* flex-grow for description height */}
                {product.description}
              </p>
              <p className="text-orange-400 text-xl font-bold mb-4">
                {product.price}
              </p>
            </div>
            <div className="p-6 pt-0"> {/* Padding top 0 to reduce space above button */}
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg
                           transition-colors duration-300 shadow-md transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Shop;
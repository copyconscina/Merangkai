// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Make sure this is imported if not already global

// Define your images here.
// IMPORTANT: The 'src' paths are relative to your 'public' folder.
// You will rename your photos to match these filenames exactly.
const images = [
  { src: '/gallery/merangkai-photo-1.png', width: 800, height: 600, alt: 'Serene Sunset' },
  { src: '/gallery/merangkai-photo-2.png', width: 1200, height: 800, alt: 'Peaceful Morning Dew' },
  { src: '/gallery/merangkai-photo-3.png', width: 900, height: 1200, alt: 'Calm Forest Path' },
  // If you add more photos, just follow this pattern:
  // { src: '/gallery/merangkai-photo-04.jpg', width: XXX, height: YYY, alt: 'Description' },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1); // State to control the lightbox

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-5xl font-serif text-center mb-12 text-orange-400">
        Visual Sanctuary
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-16 text-gray-300">
        A collection of visuals designed to inspire tranquility and mindfulness.
      </p>

      {/* Grid display for thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx} // Using index as key for now
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg
                       transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => setIndex(idx)} // Open lightbox on click
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover" // Image covers the div
              onError={(e) => { // Fallback for images that fail to load
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x400/777777/FFFFFF?text=Image+Missing';
              }}
            />
             {/* Overlay with text on hover */}
             <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300 flex items-center justify-center p-2">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center font-medium">
                    {img.alt}
                </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox component for full-screen view */}
      <Lightbox
        slides={images}
        open={index >= 0} // Lightbox is open if index is 0 or greater
        index={index}
        close={() => setIndex(-1)} // Close lightbox by resetting index
        // Optional Lightbox plugins (e.g., Zoom, Thumbnails). Install first if you use them.
        // plugins={[Fullsc, Zoom, Thumbnails]}
      />
    </motion.section>
  );
};

export default Gallery;
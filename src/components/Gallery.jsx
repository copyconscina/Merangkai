// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album'; // This is what you had for your gallery. Keep if needed.
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Make sure this is imported if not already global

// Example images. Replace with your actual image paths in public/gallery/
const images = [
  { src: '/gallery/img1.png', width: 800, height: 600, alt: 'Serene Nature' },
  { src: '/gallery/img2.png', width: 1200, height: 800, alt: 'Mindful Moment' },
  { src: '/gallery/img3.png', width: 900, height: 1200, alt: 'Peaceful Scene' },
  { src: '/gallery/img4.png', width: 1600, height: 1000, alt: 'Calm Landscape' },
  { src: '/gallery/img5.png', width: 1000, height: 750, alt: 'Abstract Calm' },
  { src: '/gallery/img6.png', width: 700, height: 900, alt: 'Inner Journey' },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

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

      {/* Grid-like display for thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg
                       transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 p-2 text-center">
                    {img.alt}
                </span>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // You might have plugins for zoom, thumbnails etc. based on your setup
        // plugins={[Fullsc, Zoom, Thumbnails]} // Example
      />
    </motion.section>
  );
};

export default Gallery;
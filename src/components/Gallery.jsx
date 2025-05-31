// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Make sure this is imported

// Define your images using placeholder URLs.
// You can replace these URLs directly with your image links,
// or place your images in the /public/gallery/ folder and use paths like '/gallery/my-photo-1.jpg'.
const images = [
  { src: 'https://placehold.co/800x600/262626/ECE7DF?text=Artistic+View+1', width: 800, height: 600, alt: 'Abstract Serenity' },
  { src: 'https://placehold.co/1200x800/262626/B44C19?text=Deep+Thought+2', width: 1200, height: 800, alt: 'Contemplation' },
  { src: 'https://placehold.co/900x1200/262626/5982F6?text=Inner+Calm+3', width: 900, height: 1200, alt: 'Peaceful Mindscape' },
  { src: 'https://placehold.co/1600x1000/262626/44A367?text=Stillness+4', width: 1600, height: 1000, alt: 'Quiet Reflection' },
  { src: 'https://placehold.co/1000x750/262626/ECE7DF?text=Harmony+5', width: 1000, height: 750, alt: 'Balanced Perspective' },
  { src: 'https://placehold.co/700x900/262626/B44C19?text=Journey+6', width: 700, height: 900, alt: 'Exploration' },
  { src: 'https://placehold.co/800x800/262626/5982F6?text=Reflection+7', width: 800, height: 800, alt: 'Self-Discovery' },
  { src: 'https://placehold.co/1500x1000/262626/44A367?text=Moment+8', width: 1500, height: 1000, alt: 'Present Moment' },
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
        A curated collection of visuals to inspire tranquility and mindfulness.
      </p>

      {/* Grid display for thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx} // Using index as key
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative w-full aspect-square overflow-hidden rounded-lg shadow-xl
                       transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => setIndex(idx)} // Open lightbox on click
          >
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover" // Image covers the div
              onError={(e) => { // Fallback for images that fail to load
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/400x400/777777/FFFFFF?text=Image+Error';
              }}
            />
             {/* Subtle overlay that fades out on hover, revealing image more clearly */}
             <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300
                             flex items-center justify-center p-2">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                 text-center font-medium drop-shadow-lg">
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
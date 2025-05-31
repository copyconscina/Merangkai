import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const slides = [
  { src: '/gallery/img1.jpg' },
  { src: '/gallery/img2.jpg' },
  { src: '/gallery/img3.jpg' },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center py-10 px-6">
      <h2 className="text-3xl font-cinzel text-white mb-6">Gallery</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.title}
            className="w-40 h-40 object-cover cursor-pointer rounded-lg hover:scale-105 transition-transform"
            onClick={() => setOpen(true)}
          />
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </div>
  );
}

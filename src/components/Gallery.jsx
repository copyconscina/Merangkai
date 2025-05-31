'use client'; 

import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

const slides = [
  { src: '/images/1.png', title: 'Sunset Moments' },
  { src: '/images/2.png', title: 'Nature Escape' },
  { src: '/images/3.png', title: 'Mindful Walk' },
];

const Gallery = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-cinzel text-center mb-8 text-white">Gallery</h2>
      <Lightbox
        slides={slides}
        open
        plugins={[Captions]}
        captions={{ descriptionTextAlign: 'center' }}
      />
    </div>
  );
};

export default Gallery;

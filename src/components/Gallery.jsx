import React from 'react';

export default function CustomGallery() {
  const images = [
    { src: '/images/1.png', alt: 'Image 1' },
    { src: '/images/2.png', alt: 'Image 2' },
    { src: '/images/3.png', alt: 'Image 3' },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}

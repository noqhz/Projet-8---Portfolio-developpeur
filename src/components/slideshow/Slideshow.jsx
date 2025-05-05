import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <button className="prev-button" onClick={prevImage}>
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      <button className="next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default Slideshow;
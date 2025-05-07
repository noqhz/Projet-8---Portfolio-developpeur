import React, { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`slideshow ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="slideshow-main">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="main-image"
          onClick={toggleFullscreen}
        />
      </div>
      {!isFullscreen && (
        <div className="slideshow-infos">
          <div className="slideshow-description">
            <p className="image-name">{images[currentIndex].name}</p>
            <p>(cliquer sur l'image pour l'agrandir)</p>
          </div>
          <div className="slideshow-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
      {isFullscreen && (
        <button className="close-fullscreen" onClick={toggleFullscreen}>
          ➜
        </button>
      )}
    </div>
  );
}

export default Slideshow;
import React, { useState, useEffect } from 'react';
import './PageFoto.css';
import '../App.css';
import Image1 from '../images/image1.JPG';
import Image2 from '../images/image2.JPG';
import Image3 from '../images/image3.JPG';
import Image4 from '../images/image4.JPG';
import Image5 from '../images/image5.JPG';
import Image6 from '../images/image6.JPG';
import Image7 from '../images/image7.jpeg';
import Image8 from '../images/image8.JPG';
import Image9 from '../images/image9.JPG';
import Image10 from '../images/image10.jpeg';
import Image11 from '../images/image11.jpeg';



const ImageSlider = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="page-foto-content">
      <div className="page-foto-title">
        <h1 className="page-foto-title-extend">
          Foto Kegiatan
        </h1>
      </div>
      <div className="page-foto-container">
        <div className="page-foto-slider">
          <div className="page-foto-arrow page-foto-left-arrow" onClick={goToPrevious}>
            &#8249;
          </div>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <div className="page-foto-arrow page-foto-right-arrow" onClick={goToNext}>
            &#8250;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
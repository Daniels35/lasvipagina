import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContainer, CarouselImage } from './ImageCarousel2.styles';

import image1 from '../../assets/images/banner2/1.webp';
import image2 from '../../assets/images/banner2/2.webp';
import image3 from '../../assets/images/banner2/3.webp';
import image4 from '../../assets/images/banner2/4.webp';
import image5 from '../../assets/images/banner2/5.webp';

const ImageCarousel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const images = [image1, image2, image3, image4, image5];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleImageClick = (index) => {
    setActiveImageIndex(index);
    setModalOpen(true);
  };
  const nextImage = () => {
    const nextIndex = (activeImageIndex + 1) % images.length;
    setActiveImageIndex(nextIndex);
  };
  const prevImage = () => {
    const prevIndex = (activeImageIndex - 1 + images.length) % images.length;
    setActiveImageIndex(prevIndex);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [loadedImages, setLoadedImages] = useState([true, true, false, false, false]);
  const handleSlideChange = (currentIndex) => {
    const nextIndex = (currentIndex + 1) % 5;
    const loadIndex = (index) => {
      if (!loadedImages[index]) {
        const updatedLoadedImages = [...loadedImages];
        updatedLoadedImages[index] = true;
        setLoadedImages(updatedLoadedImages);   
      }
    };
    loadIndex(currentIndex);
    loadIndex(nextIndex);
  };
  return (
    <>
      <CarouselContainer>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={600}
          onChange={handleSlideChange}
        >
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <CarouselImage src={image} alt={`Pinzas Lasvi ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
      {modalOpen && (
        <Modal
          image={images[activeImageIndex]}
          onClose={handleCloseModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};
const Modal = ({ image, onClose, onNext, onPrev }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      onNext(event);
    } else if (event.key === 'ArrowLeft') {
      onPrev(event);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <img
        src={image}
        alt="Expanded"
        style={{
          maxHeight: '90%',
          maxWidth: '90%',
          objectFit: 'contain',
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        &times;
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '1.5rem',
          color: 'black',
          fontSize: '3rem',
          cursor: 'pointer',
          transform: 'translateY(-50%)',
          zIndex: 1001,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev(e);
        }}
      >
        &#10094;
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '1.5rem',
          color: 'black',
          fontSize: '3rem',
          cursor: 'pointer',
          transform: 'translateY(-50%)',
          zIndex: 1001,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onNext(e);
        }}
      >
        &#10095;
      </div>
    </div>
  );
};
export default ImageCarousel;
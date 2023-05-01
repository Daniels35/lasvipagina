import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContainer, CarouselImage, ImageOverlay } from './ImageCarousel3.styles';
import ContactButtonComponent from '../ContactButton/ContactButton';
import image1 from '../../assets/images/product/1.webp';
import image2 from '../../assets/images/product/2.webp';
import image3 from '../../assets/images/product/3.webp';
import image4 from '../../assets/images/product/4.webp';
import image5 from '../../assets/images/product/5.webp';

const ImageCarousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };
  return (
    <>
      <CarouselContainer>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
        >
          {images.map((image, index) => (
            <div key={index}>
              <CarouselImage 
                src={image} 
                alt={`Pinzas Lasvi ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
              <ImageOverlay 
                isActive={activeImageIndex === index}
                onClick={() => handleImageClick(null)}
              >
                <p>Contacta con Nosotros</p>          
              </ImageOverlay>
            </div>
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default ImageCarousel;
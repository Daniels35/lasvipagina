import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselContainer, CarouselImage } from './ImageCarousel.styles';
import image1 from '../../assets/images/banner1/1.webp';
import image2 from '../../assets/images/banner1/2.webp';
import image3 from '../../assets/images/banner1/3.webp';
import mobileImage1 from '../../assets/images/banner1/mobile1.webp';
import mobileImage2 from '../../assets/images/banner1/mobile2.webp';
import mobileImage3 from '../../assets/images/banner1/mobile3.webp';
import '../../assets/css/carouselOverrides.css'

const ImageCarousel = () => {
  const [thirdImageLoaded, setThirdImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleSlideChange = (currentIndex) => {
    if (
      (!thirdImageLoaded && currentIndex === 1) ||
      (currentIndex === 2 && !thirdImageLoaded)
    ) {
      setThirdImageLoaded(true);
    }
  };
  return (
    <CarouselContainer>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        transitionTime={600}
        onChange={handleSlideChange}
      >
        <div>
          <CarouselImage
            src={isMobile ? mobileImage1 : image1}
            alt="Pinzas Lasvi"
          />
        </div>
        <div>
          <CarouselImage
            src={isMobile ? mobileImage2 : image2}
            alt="Pinzas Lasvi"
            />
          </div>
          <div>
            {thirdImageLoaded && (
              <CarouselImage
                src={isMobile ? mobileImage3 : image3}
                alt="Pinzas Lasvi"
              />
            )}
          </div>
        </Carousel>
      </CarouselContainer>
    );
  };
  
  export default ImageCarousel;
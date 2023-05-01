import React, { useState, useEffect } from 'react';
import { CoursesContainer, Title, CarouselImageWrapper, Block, ProductDescription } from './Courses.style';
import  {Carousel}  from 'react-round-carousel';
import '../../assets/css/carouselOverrides.css';
import 'react-round-carousel/src/index.css';
import ContactButtonComponent from '../../components/ContactButton/ContactButton';
import ImageCarousel from '../../components/ImageCarousel3/ImageCarousel3';
import { Helmet } from 'react-helmet';
import image1 from '../../assets/images/product/1.webp';
import image2 from '../../assets/images/product/2.webp';
import image3 from '../../assets/images/product/3.webp';
import image4 from '../../assets/images/product/4.webp';
import image5 from '../../assets/images/product/5.webp';
import image6 from '../../assets/images/product/6.webp';
import image7 from '../../assets/images/product/7.webp';
import image8 from '../../assets/images/product/8.webp';
const Courses = () => {
  const [itemWidth, setItemWidth] = useState(500);
  const updateItemWidth = () => {
    if (window.innerWidth <= 767) {
      setItemWidth(300);
    } else if (window.innerWidth > 767 && window.innerWidth <= 1023) {
      setItemWidth(300);
    } else {
      setItemWidth(600);
    }
  };
  useEffect(() => {
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => {
      window.removeEventListener('resize', updateItemWidth);
    };
  }, []);
  const items = [
    {
      alt: 'Pinzas Lasvi',
      image: image1,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image2,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image3,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image4,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image5,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image6,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image7,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
    {
      alt: 'Pinzas Lasvi',
      image: image8,
      content: (
        <div>
          <strong>Contacta con Nosotros</strong>
          <>
          <ContactButtonComponent />
          </>
        </div>
      ),
    },
   
  ];

  return (
    <CoursesContainer>
      <Helmet>
        <title>PINZAS LASVI</title>
      </Helmet> 
      <Title>Pinzas Lasvi</Title>
      <Block>
      <Carousel
      className="courses-carousel"
      items={items}
      itemWidth={itemWidth} // Cambia el ancho de los elementos del carrusel
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <CarouselImageWrapper>
            <img src={item.image} alt={item.alt} />
            </CarouselImageWrapper>
            <div>{item.content}</div>
          </Carousel.Item>
        ))}
      </Carousel>
        </Block>
        <ImageCarousel />
        <ProductDescription>Descubre las pinzas Lasvi y experimenta alivio en cuello, espalda y articulaciones. Estas innovadoras pinzas actúan sobre la zona auricular, equilibrando el funcionamiento de las terminaciones nerviosas desde la columna vertebral y ayudándote a aliviar diversos síntomas. No dejes que el dolor limite tu vida, contáctanos hoy mismo para obtener más información sobre cómo las pinzas Lasvi pueden mejorar tu bienestar.</ProductDescription>
        <ContactButtonComponent />  
    </CoursesContainer> 
  );
};
export default Courses;
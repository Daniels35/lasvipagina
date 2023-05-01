import React from 'react';
import Slider from 'react-slick';
import { TestimoniosContainer, TestimonioWrapper, TestimonioImage, TestimonioNombre, TestimonioTexto, Calificacion } from './Testimonios.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ContentTitle, ContentText} from '../Testimonios/Testimonios.styles';
import image1 from '../../assets/images/testimonios/5.webp';
import image2 from '../../assets/images/testimonios/2.webp';
import image3 from '../../assets/images/testimonios/4.webp';

const Testimonios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          },
      },
    ],
  };

  return (
    <TestimoniosContainer>
        <ContentTitle>TESTIMONIOS</ContentTitle>
        <ContentText>Participantes de nuestros Eventos y Sesiones</ContentText>
      <Slider {...settings}>
        <TestimonioWrapper>
          <TestimonioImage src={image1} alt="Testimonio 1" />
          <TestimonioNombre>Juan Perez</TestimonioNombre>
          <TestimonioTexto>¡Las Pinzas Lasvi son increíbles! Las uso todas las noches antes de dormir y me ayudan a relajarme y dormir mejor.</TestimonioTexto>
          <Calificacion>★★★★★</Calificacion>
        </TestimonioWrapper>
        <TestimonioWrapper>
          <TestimonioImage src={image2} alt="Testimonio 2" />
          <TestimonioNombre>María Rodríguez</TestimonioNombre>
          <TestimonioTexto>Compré las Pinzas Lasvi para aliviar mi dolor de cuello y espalda, y funcionaron maravillosamente. ¡Definitivamente las recomiendo!</TestimonioTexto>
          <Calificacion>★★★★★</Calificacion>
        </TestimonioWrapper>
        <TestimonioWrapper>
          <TestimonioImage src={image3} alt="Testimonio 3" />
          <TestimonioNombre>Pablo González</TestimonioNombre>
          <TestimonioTexto>¡Las Pinzas Lasvi son geniales! Me ayudan a aliviar mi estrés después de un largo día de trabajo.</TestimonioTexto>
          <Calificacion>★★★★★</Calificacion>
        </TestimonioWrapper>
      </Slider>
    </TestimoniosContainer>
  );
};

export default Testimonios;


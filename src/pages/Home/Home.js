import React, { useRef, useEffect, useState } from 'react';
import {
  HomeContainer,
  ContentWrapper,
  ContentImage,
  ContentTitle,
  ContentText,
  LearnMoreButton,
  ButtonContainer,
  ContentImage2,
  ContentImage22
} from './Home.styles';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import ScrollingBanner from '../../components/ScrollingBanner/ScrollingBanner';
import UsosEspecificos from '../../components/UsosEspecificos/UsosEspecificos';
import Testimonios from '../../components/Testimonios/Testimonios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/pinzas.webp';
import image2 from '../../assets/images/perfil.webp';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import { Helmet } from 'react-helmet';
const Home = () => {
  const [visibleBanner, setVisibleBanner] = useState(false);
  const refBanner = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleBanner(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(refBanner.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  const [visibleVideoPlayer, setVisibleVideoPlayer] = useState(false);
  const refVideoPlayer = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleVideoPlayer(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(refVideoPlayer.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <HomeContainer>
      <Helmet>
        <title>PINZAS LASVI</title>
      </Helmet>
      <ImageCarousel />
      <SocialButtons />
<ContentWrapper>
  <ContentImage src={image1} alt="Pinzas Lasvi" />
  <div> 
    <ContentTitle>¿Qué son las Pinzas Lasvi?</ContentTitle>
    <ContentText>
      Son una herramienta, en forma de media luna, con un sistema lateral de presión  que sirve para <strong>aliviar las molestias de cuello, espalda y articulaciones, entre otros beneficios cómo la mejoría del estrés, la ansiedad, la perdida de volumen corporal y el insomnio, entre otros.</strong><br />
      Estos efectos se producen debido a la presión ejercida por la placa exterior, y sus  salientes, sobre la zona reflexológica de la columna vertebral en la oreja.<br /><br/>
      Las pinzas Lasvi fueron desarolladas por el profesor D. Carlos Lasvi y su compañero el acupuntor D. Jesús García en su consulta de la Gran Vía n°, 61 de Madrid (España).
    </ContentText>
    <ButtonContainer>
      <Link to="/lasvipagina/pinzas">
        <LearnMoreButton>Saber Más</LearnMoreButton>
      </Link>
    </ButtonContainer>
  </div>
</ContentWrapper>
<ContentWrapper className='who' >
        <div> 
          <ContentTitle>¿Quién es Carlos Lasvi?</ContentTitle>
          <ContentText>
          Se considera uno de las mayores autoridades internacionales en acupuntura, ha impartido clases en diferentes escuelas, universidades y hospitales del mundo. Fundador de la Escuela Superior de Acupuntura CML Lasvi. <strong>Más información en <Link to="https://www.escueladeacupunturalasvi.es/" target="_blank">www.cmllasvi.es</Link></strong>
</ContentText>
<ButtonContainer>
  <Link to ="/lasvipagina/about">
  <LearnMoreButton>Saber Más</LearnMoreButton>
  </Link>
</ButtonContainer>
</div>
    <ContentImage22>
        <ContentImage2 src={image2} alt="Pinzas Lasvi"  />
        </ContentImage22>
</ContentWrapper>
<ScrollingBanner />
<div ref={refBanner}>
    <UsosEspecificos />
</div>
<div ref={refVideoPlayer}>
</div>
{visibleBanner && (
  <>
    <Testimonios />
  </>
 )}
{visibleVideoPlayer && (
      <>
        <VideoPlayer />
      </>
    )}
</HomeContainer>
);
};
export default Home;
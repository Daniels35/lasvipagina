import React, { useState, useEffect } from 'react';
import { AboutContainer, AboutTitle, AboutContent, ProfileImage, ContactButton, SocialLinks, PinzasBanner} from './About.styles';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import perfil from '../../assets/images/perfil.webp';
import AboutNumbers from '../../components/AboutNumbers/AboutNumbers';
import aboutBackground from '../../assets/images/bannerlasvi.webp';
import aboutMobileBackground from '../../assets/images/bannerlasvimobile.webp';
import { Helmet } from 'react-helmet';
import ContactButtonComponent from '../../components/ContactButton/ContactButton';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
useEffect(() => {
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  window.addEventListener('resize', checkIsMobile);
  checkIsMobile();
  return () => {
    window.removeEventListener('resize', checkIsMobile);
  };
}, []);
  return (
    <AboutContainer>
      <Helmet>
        <title>PINZAS LASVI</title>
      </Helmet>
      <AboutTitle>Carlos Lasvi</AboutTitle>
      <ProfileImage src={perfil} alt="Carlos Lesvi" />
      <AboutContent>
        <p>
        D. Carlos Lasvi, Fundador de la Escuela Superior de Acupuntura CML Lasvi es Ph.D. en acupuntura, pionero en la formación de acupuntores profesionales en España y otros países, comenzó a desarrollar su actividad docente a partir de 1.976, haciéndolo en los países y ciudades descritos seguidamente. Es considerado uno de las mayores autoridades internacionales en acupuntura.
        Debido a la dilatada actividad de este profesional dentro de las diferentes disciplinas que este tipo de terapia integra, el informe de actividades es excesivamente amplio, por lo que el documento presente ha sido resumido. <strong>Más información en <Link to="https://www.escueladeacupunturalasvi.es/" target="_blank">www.cmllasvi.es</Link></strong></p>
       <br></br>
        <p className='sing'><strong>
        Profesor Carlos Lasvi.</strong></p>
      </AboutContent>
      <ContactButtonComponent />
      <SocialLinks>
  <a href="#" target="_blank" rel="noreferrer">
    <FaFacebookF size={24} color="#1877F2" />
  </a>
  <a href="#" target="_blank" rel="noreferrer">
    <FaInstagram size={24} color="#C13584" />
  </a>
  <a href="#" target="_blank" rel="noreferrer">
    <FaYoutube size={24} color="#FF0000" />
  </a>
</SocialLinks>
<AboutNumbers />
<PinzasBanner>
          <img src={isMobile ? aboutMobileBackground : aboutBackground} alt="Pinzas Lasvi" />
</PinzasBanner>
<ContactButtonComponent />
    </AboutContainer>
  );
};

export default About;
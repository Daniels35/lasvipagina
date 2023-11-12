import React, { useRef, useEffect, useState } from 'react';
import { PinzasBanner, SectionTitle, PinzasContent, VideoWrapper, CardContainer, CardTitle, CardContent, UseContainer,
  ContentWrapper,
  ContentImage,
  ContentTitle,
  ContentText,} from './Pinzas.styles';
import pinzasBackground from '../../assets/images/bannerpinzas.webp';
import pinzasBackground2 from '../../assets/images/banner2.webp';
import ContactButtonComponent from '../../components/ContactButton/ContactButton';
import ImageCarousel2 from '../../components/ImageCarousel2/ImageCarousel2';
import image1 from '../../assets/images/pagina.webp';
import pinzasMobileBackground from '../../assets/images/bannerpinzasmobie.webp';
import pinzasMobileBackground2 from '../../assets/images/banner2mobile.webp';
import { Helmet } from 'react-helmet';
import imagex from '../../assets/images/x.webp';

const Pinzas = () => {
  
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

  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const [visibleBanner, setVisibleBanner] = useState(false);
  const refBanner = useRef();
  const [visibleBanner2, setVisibleBanner2] = useState(false);
  const refBanner2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleBanner2(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(refBanner2.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ampliar, setAmpliar] = useState(false);
  const ampliarImagen = () => {
    setAmpliar(!ampliar);
  }
    return (
     
      <div>
      <Helmet>
        <title>PINZAS LASVI</title>
      </Helmet>
        <PinzasBanner>
          <img src={isMobile ? pinzasMobileBackground : pinzasBackground} alt="Pinzas Lasvi" />
        </PinzasBanner>
        <SectionTitle>Cómo Utilizar las Pinzas</SectionTitle>
      <PinzasContent>
        <p>
          Su colocación es muy fácil: Póngase frente al espejo, abra la pinza y colóquela en la oreja, poniéndola en el mismo lugar que aparece en la imagen. Para un mayor y más rápido alivio de las molestias, póngase las pinzas en ambas orejas. Una vez puestas, presione las pinzas sobre la zona donde se colocaron.
        </p>
      </PinzasContent>
      <VideoWrapper>
      <iframe
  src="https://www.youtube.com/embed/d_-nndHQe7s?rel=0"
  title="Video de colocación de las PINZAS"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
></iframe>
      </VideoWrapper>
      <div ref={refBanner2}>
      <PinzasContent>
        <p>
          Dentro del estudio de la Acupuntura aparece, como una de las materias principales, la Acupuntura Auricular. Esta técnica consiste en estimular determinados puntos situados en el pabellón auricular, en los que se reflejan cada una de las partes en las que se divide el organismo humano: la columna vertebral, la cabeza, los miembros superiores e inferiores, los órganos principales y otras.
        </p>
      </PinzasContent>
      </div>
        <div ref={refBanner}>
        <SectionTitle>Alivio Integral</SectionTitle>
        </div>
      {visibleBanner2 && (
        <PinzasContent>
          <p>
          Estas pinzas están diseñadas para relajar los músculos del cuello y la espalda, músculos bajo los cuales pasan las terminaciones nerviosas procedentes de la médula espinal y que se extienden a cada una de las partes principales del organismo para que estas funcionen correctamente. Por esta circunstancia, cuando los músculos antedichos, y debido a su contractura, presionan estas terminaciones nerviosas, eso puede provocar que las funciones de estos nervios se vean alteradas por dichas contracturas. Así pues, cuando estos músculos quedan relajados de manera que las ramas nerviosas mencionadas cumplan con su función, es común que no solo mejoren o se corrijan las molestias del cuello y espalda, sino también las de otras partes del cuerpo.
          </p><br></br>
          <br />
          <ContentImage src={imagex} alt="alivio integral" onClick={ampliarImagen}/> 
      {ampliar && (
        <div className="ampliacion-imagen" onClick={ampliarImagen}>
          <img src={imagex} alt="alivio integral" />
        </div>
      )}
        </PinzasContent>
          )}
      <div >
    {visibleBanner && (
      <PinzasBanner className="banner2">
        <img src={isMobile ? pinzasMobileBackground2 : pinzasBackground2} alt="Pinzas Lasvi" />
      </PinzasBanner>
    )}
  </div>
      <SectionTitle>Recomendaciones y Observaciones</SectionTitle>
        <PinzasContent>
            <p>
          Los efectos observados al aplicarse estas pinzas sobre los puntos auriculares donde se refleja la columna vertebral son: <strong>el alivio de las molestias de cuello y espalda principalmente. Algún tipo de dolor de cabeza. Alivio de algunas molestias en los miembros superiores e inferiores. Alivio de los estados de ansiedad. Muchas de las personas que tienen exceso de peso, es porque la ansiedad las hace comer muy rápido y demasiado, por lo que el uso de estas pinzas puede ayudarles a adelgazar.</strong>
           </p>
            <br></br>
            <p>
            Las pinzas deben ponerse durante 2 horas (o más) al día hasta conseguir el efecto deseado. Al colocar las pinzas en las orejas, es recomendable presionarlas un poco contra la zona reflexológica a tratar.
            </p>
        </PinzasContent>
        <CardContainer>
          <div ref={ref}>
        <CardTitle>Información de interés</CardTitle>
        </div>
        <CardContent>
          <p>Hay personas que, al principio de la implantación de las pinzas, pueden sentir molestias en las orejas. Si esto sucede, deberán colocarse éstas solamente durante 10 minutos, repitiéndose esta acción varias veces al día.</p>
          <br></br>
          <p>Cuando sucede lo anterior suele ser porque, como la espalda y el cuello se comunican, por vía energética, con el pabellón auricular en la zona reflexológica donde situamos las pinzas, cuando existen molestias en el cuello y la espalda, también pueden tenerlas sus zonas reflexológicas en la oreja. Sin embargo, a medida que desaparecen las molestias en el cuello y la espalda, también suelen desaparecer las molestias en la oreja.</p>
          <br></br>
          <p>Cuando hay demasiadas molestias en el cuello y/o la espalda, es conveniente usar las pinzas dos veces al día durante 2 horas o dejarlas puestas todo el día si se quiere (esto puede hacerse durante semanas, meses o años).</p>
        </CardContent>
      </CardContainer>
      <ImageCarousel2 />
        <div >
        {visible && (
          <>
        <ContentWrapper className="right-image" id="control" >
            <ContentImage src={image1} alt="medico" />
             <div> 
                 <ContentTitle>MUY IMPORTANTE</ContentTitle>
                      <ContentText>      
                Estas pinzas no sustituyen, en ningún caso, la función del médico, sino que son un instrumento cuya finalidad consiste, únicamente, en producir alivio de los síntomas. Por esta circunstancia, <strong>no se debe dejar de acudir al médico para saber el origen de las molestias u otras terapias recomendadas por él.</strong> 
                <br></br>
                La aplicación de las <strong>pinzas</strong> suele producir placenteros estados de relajación, <strong>por eso no es aconsejable conducir con ellas puestas.</strong>
                <br></br>
                <strong>No es conveniente usarlas en niños porque puede molestarles la presión ejercida por las pinzas.</strong>
                <br></br>
                <strong>Manténganse las pinzas alejadas de los niños porque contiene piezas desmontables.</strong>         
                       </ContentText> 
                </div> 
         </ContentWrapper>
                </>
        )}
        </div>
    </div>
  );
};
export default Pinzas;
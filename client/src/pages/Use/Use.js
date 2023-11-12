import React from 'react';
import {
  UseContainer,
  ContentWrapper,
  ContentImage,
  ContentTitle,
  ContentText,
} from './Use.styles';
import ContactButtonComponent from '../../components/ContactButton/ContactButton';
import image1 from '../../assets/images/usos/7.webp';
import image2 from '../../assets/images/usos/8.webp';
import image3 from '../../assets/images/usos/9.webp';
import image4 from '../../assets/images/usos/10.webp';
import image5 from '../../assets/images/usos/11.webp';
import { Helmet } from 'react-helmet';
const Use = () => {
    return (
    <UseContainer>
        <Helmet>
        <title>PINZAS LASVI</title>
      </Helmet>
        <ContentWrapper className="left-image" id="manejo">
            <ContentImage src={image1} alt="Dolor de cuelllo y espalda" className ="hola" />
             <div> 
                 <ContentTitle>Dolor de cuello y espalda</ContentTitle>
                      <ContentText>
                      El dolor de cuello y  espalda no siempre está provocado por las mismas causas. Incluso, manteniendo hábitos de vida saludables, se pueden padecer estas molestias, debido a afecciones diversas. 
                      Las pinzas Lasvi están diseñadas para ayudarte en el alivio del dolor de cuello, espalda y los síntomas  físicos que te impiden realizar las actividades diarias habituales. 
                      Las molestias de cuello y espalda son problemas muy comunes y pueden aparecer por diferentes causas en las que las tensiones musculares juegan un papel importante.
                      Pero al usar las pinzas Lasvi, los músculos de tu espalda se descontracturan y cómo resultado las molestias suelen desaparecer generando una sensación de alivio y bienestar que te permitirá volver a tu vida normal.
                       </ContentText> 
                </div>
        </ContentWrapper>
        <ContentWrapper className="right-image" id="control">
            <ContentImage src={image2} alt="Control de ansiedad y estrés" />
             <div> 
                 <ContentTitle>Control de ansiedad y estrés</ContentTitle>
                      <ContentText>
                          El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes, ya sean reales o imaginarias. La respuesta al estrés puede incluir una serie de cambios fisiológicos y emocionales, como el aumento del ritmo cardíaco, la respiración rápida, la sudoración y la liberación de hormonas como el cortisol y la adrenalina.
                          Cuando el estrés es crónico o excesivo, puede ser perjudicial para la salud física y mental, y puede aumentar el riesgo de enfermedades crónicas, como enfermedades cardíacas, diabetes, trastornos de ansiedad y depresión.
                          Existen diversas técnicas y estrategias para manejar y reducir el estrés.
                           Al utilizar las pinzas durante 2 horas (o más) al día, podrás reducir los niveles de ansiedad y estrés de forma significativa.
                       </ContentText> 
                </div>
         </ContentWrapper>
         <ContentWrapper className="left-image" id="peso">
            <ContentImage src={image3} alt="Pinzas Lasvi" />
             <div> 
                 <ContentTitle>Control de peso</ContentTitle>
                      <ContentText>
                      Perder peso puede ser un desafío, pero hay muchas cosas que puedes hacer para ayudar a que el proceso sea más fácil y efectivo.
                        <br></br>
                        Uno de los efectos que producen las pinzas Lasvi al presionar la zona reflexológica de las cervicales es una sensación de relajación general que evita el apetito excesivo y, por tanto, se suele adelgazar.
                        <br></br>
                        Pero además, al presionar la zona reflexológica de las vértebras dorsales y lumbares, lugar por donde circula el meridiano de la vejiga, el organismo elimina líquidos a través de la orina, haciendo posible la reducción del volumen corporal.
                       </ContentText> 
                </div>
         </ContentWrapper>
         <ContentWrapper className="right-image" id="deportistas">
            <ContentImage src={image4} alt="Pinzas Lasvi" />
             <div> 
                 <ContentTitle>Relajación muscular</ContentTitle>
                      <ContentText>
                      El dolor muscular puede originarse por factores no relacionados con alguna patología subyacente. Por ejemplo, puede ser resultado de la práctica de ejercicios, la prolongada permanencia en una misma posición sentada o acostada, la realización de una actividad física nueva o de la presencia de torceduras o desgarros. Nuestras pinzas te ayudarán a sentir alivio.
                       </ContentText> 
                </div>
        </ContentWrapper>
        <ContentWrapper className="left-image" >
            <ContentImage src={image5} alt="Pinzas Lasvi" id="insomnio"/>
             <div> 
                 <ContentTitle>Insomnio</ContentTitle>
                      <ContentText>
                        El insomnio es un trastorno que impide conciliar el sueño y que hace que nos despertemos una o más veces durante la noche, y en muchos casos, que durmamos pocas horas. Este trastorno causa fatiga diurna, irritabilidad y dificultad para concentrarse. Dicho trastorno puede tener una duración de algunas semanas o ser crónico. Sin embargo, las pinzas Lasvi pueden aliviar estos síntomas si se utilizan durante una hora antes de acostarse. Después de ser usadas durante quince o veinte días, pueden dejarse de usar para comprobar si ya se puede dormir sin utilizarlas, volviéndose a usar si reaparece este trastorno.
                       </ContentText> 
                </div>
         </ContentWrapper>
        <ContactButtonComponent />
    </UseContainer>
     );
    };

export default Use;
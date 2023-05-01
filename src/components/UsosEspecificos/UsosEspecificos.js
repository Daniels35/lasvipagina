import React from 'react';
import {
  UsosEspecificosContainer,
  UsosEspecificosWrapper,
  UsosEspecificosItem,
  UsosEspecificosImage,
  UsosEspecificosTitle,
  UsosEspecificosButton,
  Centrado,
} from './UsosEspecificos.styles';
import { HashLink } from 'react-router-hash-link';
import image1 from '../../assets/images/usos/3.webp';
import image2 from '../../assets/images/usos/5.webp';
import image3 from '../../assets/images/usos/4.webp';
import image4 from '../../assets/images/usos/2.webp';
import image5 from '../../assets/images/usos/1.webp';
const UsosEspecificos = () => {
  return (
    <UsosEspecificosContainer>
      <UsosEspecificosWrapper>
        <UsosEspecificosItem>
          <UsosEspecificosImage src={image2} alt="Control del estrés y ansiedad" />
          <UsosEspecificosTitle>Dolor de cuello y espalda</UsosEspecificosTitle>
          <UsosEspecificosButton>
            <HashLink to="/use#manejo">Saber Más</HashLink>
          </UsosEspecificosButton>
        </UsosEspecificosItem>
        <UsosEspecificosItem>
          <UsosEspecificosImage src={image1} alt="Manejo del dolor" />
          <UsosEspecificosTitle>Control del estrés y la ansiedad</UsosEspecificosTitle>
          <UsosEspecificosButton>
            <HashLink to="/use#control">Saber Más</HashLink>
          </UsosEspecificosButton>
        </UsosEspecificosItem>
        <UsosEspecificosItem>
          <UsosEspecificosImage src={image3} alt="Control del peso" />
          <UsosEspecificosTitle>Control de peso</UsosEspecificosTitle>
          <UsosEspecificosButton>
            <HashLink to="/use#peso">Saber Más</HashLink>
          </UsosEspecificosButton>
        </UsosEspecificosItem>
      </UsosEspecificosWrapper>
       <Centrado>
        <UsosEspecificosItem>
          <UsosEspecificosImage src={image4} alt="Relajacion Muscular" />
          <UsosEspecificosTitle>Relajación Muscular</UsosEspecificosTitle>
          <UsosEspecificosButton>
            <HashLink to="/use#deportistas">Saber Más</HashLink>
          </UsosEspecificosButton>
        </UsosEspecificosItem>
        <UsosEspecificosItem>
          <UsosEspecificosImage src={image5} alt="Insomnio" />
          <UsosEspecificosTitle>Insomnio</UsosEspecificosTitle>
          <UsosEspecificosButton>
            <HashLink to="/use#insomnio">Saber Más</HashLink>
          </UsosEspecificosButton>
        </UsosEspecificosItem>
        </Centrado>
    </UsosEspecificosContainer>
  );
};

export default UsosEspecificos;
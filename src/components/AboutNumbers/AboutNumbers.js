import React, { useRef, useEffect, useState } from 'react';
import { NumbersContainer, NumberBox, Number, Description } from './AboutNumbers.styles';
import { useSpring, animated } from 'react-spring';

const AboutNumbers = () => {
  const animatedProps1 = useSpring({ number: 33, from: { number: 0 }, config: { duration: 2000 }, delay: 4000 });
  const animatedProps2 = useSpring({ number: 25, from: { number: 0 }, delay: 5000 });
  const animatedProps3 = useSpring({ number: 20, from: { number: 0 }, delay: 6000 });
  const animatedProps4 = useSpring({ number: 1984, from: { number: 0 }, config: { duration: 2000 }, delay: 2000 });
  const animatedProps5 = useSpring({ number: 1976, from: { number: 0 }, config: { duration: 2000 }, delay: 1000 });
  const animatedProps6 = useSpring({ number: 10, from: { number: 0 }, delay: 7000 });
  const animatedProps7 = useSpring({ number: 1, from: { number: 0 }, delay: 7000 });
  const animatedProps8 = useSpring({ number: 1988, from: { number: 0 }, config: { duration: 2000 }, delay: 3000 });
  return (
    <NumbersContainer>
<NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold',         fontWeight: 'bold', marginBottom: '1rem', color: '#0098CA' }}>
          {animatedProps5.number.to((number) => `${Math.floor(number)}`)}
        </animated.div>
        <Description>Fundo la Primera escuela en impartir formación profesional sobre acupuntura en España.</Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0098CA' }}>
          {animatedProps4.number.to((number) => `${Math.floor(number)}`)}
        </animated.div>
        <Description>Fundo el Primer Centro Autorizado por la Dirección General de Enseñanzas Medias para impartir acupuntura.</Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold',  marginBottom: '1rem', color: '#0098CA' }}>
            {animatedProps8.number.to((number) => `${Math.floor(number)}`)}
        </animated.div>
        <Description>Presidente y fundador de la Federación Española de Acupuntores Profesionales</Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold',  marginBottom: '1rem', color: '#0098CA' }}>
            {animatedProps1.number.to((number) => `+${Math.floor(number)}`)}
        </animated.div>
        <Description>Actividades internacionales y nacionales tendentes a la regulación de la acupuntura</Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0098CA' }}>
          {animatedProps2.number.to((number) => `+${Math.floor(number)}`)}
        </animated.div>
        <Description>Universidades, hospitales y colegios oficiales ha impartido formación. </Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0098CA' }}>
          {animatedProps3.number.to((number) => `+${Math.floor(number)}`)}
        </animated.div>
        <Description>Menciones honoríficas</Description>
      </NumberBox> 
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0098CA' }}>
          {animatedProps6.number.to((number) => `+${Math.floor(number)}`)}
        </animated.div>
        <Description>Libros publicados</Description>
      </NumberBox>
      <NumberBox>
        <animated.div style={{ fontSize: '3rem', fontWeight: 'bold',  marginBottom: '1rem', color: '#0098CA' }}>
            {animatedProps7.number.to((number) => `${Math.floor(number)}`)}
        </animated.div>
        <Description>Autoridad en acupuntura a nivel mundial.</Description>  
      </NumberBox>
    </NumbersContainer>
  );
};

export default AboutNumbers;
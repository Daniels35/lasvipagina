import React from 'react';
import { StyledFooter, FooterLinks, FooterLink } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <FooterLink>
          <a href="#">Aviso legal</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Política de privacidad</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Política de cookies</a>
        </FooterLink>
      </FooterLinks>
      <a href='https://github.com/Daniels35' target='_blank'><p>Desarollado por Daniel Diaz para Lasvi. &copy; {new Date().getFullYear()} Todos los derechos reservados.</p></a>
    </StyledFooter>
  );
};

export default Footer;
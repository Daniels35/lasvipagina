import React from 'react';
import { StyledFooter, FooterLinks, FooterLink } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <FooterLink>
          <a href="/legal">Aviso legal</a>
        </FooterLink>
        <FooterLink>
          <a href="/legal">Política de privacidad</a>
        </FooterLink>
        <FooterLink>
          <a href="/legal">Política de cookies</a>
        </FooterLink>
      </FooterLinks>
      <p>Desarollado por Daniel Diaz para Lasvi. &copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
    </StyledFooter>
  );
};

export default Footer;
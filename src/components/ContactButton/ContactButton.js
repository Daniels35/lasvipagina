import React from 'react';
import { ContactButtonContainer, ContactButton } from './ContactButton.styles';

const ContactButtonComponent = () => {
  return (
    <ContactButtonContainer>
      <ContactButton to="/contact">Contactar</ContactButton>
    </ContactButtonContainer>
  );
};

export default ContactButtonComponent;
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WhatsAppButtonContainer, WhatsAppMessage } from './WhatsAppButton.styles';

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage((prevShowMessage) => !prevShowMessage);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleClick = () => {
    window.open('https://wa.me/573135804424', '_blank');
  };
  return (
    <WhatsAppButtonContainer onClick={handleClick}>
      <FaWhatsapp size={32} color="#25D366" />
      {showMessage && <WhatsAppMessage>Hola, escríbenos 😉</WhatsAppMessage>}
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton;
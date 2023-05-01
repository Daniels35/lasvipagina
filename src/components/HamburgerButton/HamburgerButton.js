import React from 'react';
import { MenuButton } from './HamburgerButton.styles.js';

const HamburgerButton = ({ onClick, open }) => {
  const isActive = open;
  const handleClick = () => {
    onClick();
  };

  return (
    <MenuButton className={isActive ? 'active' : ''} onClick={handleClick} aria-label="Abrir menú">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </MenuButton>
  );
};

export default HamburgerButton;
// components/ScrollToTopButton/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { ScrollToTopButtonStyled } from './ScrollToTopButton.styles';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <ScrollToTopButtonStyled onClick={scrollToTop}>
          <FaChevronUp />
        </ScrollToTopButtonStyled>
      )}
    </>
  );
};

export default ScrollToTopButton;
import React, { useRef, useEffect } from 'react';
import { ImAmazon } from 'react-icons/im';
import { BannerContainer, ScrollingContent, BannerText, AmazonIcon } from './ScrollingBanner.styles';

const ScrollingBanner = () => {
  const bannerTextRef = useRef(null);
  useEffect(() => {
    if (bannerTextRef.current) {
      const bannerText = bannerTextRef.current;
      const bannerTextClone = bannerText.cloneNode(true);
      bannerText.parentNode.appendChild(bannerTextClone);
      bannerTextClone.addEventListener('transitionend', () => {
        bannerTextClone.classList.remove('clone-transition');
        bannerTextClone.remove();
        const newBannerTextClone = bannerText.cloneNode(true);
        newBannerTextClone.classList.add('clone-transition');
        bannerText.parentNode.appendChild(newBannerTextClone);
      });
      bannerTextClone.classList.add('clone-transition');
    }
  }, []);
  return (
    <BannerContainer>
      <ScrollingContent>
        <BannerText href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" ref={bannerTextRef}>
          <AmazonIcon IconComponent={ImAmazon} />
          PINZAS LASVI en AMAZON, haz clic aquí para visitar nuestra tienda en Amazon
        </BannerText>
      </ScrollingContent>
    </BannerContainer>
  );
};

export default ScrollingBanner;
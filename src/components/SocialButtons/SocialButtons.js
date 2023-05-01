// components/SocialButtons/SocialButtons.js
import React from 'react';
import { SocialBanner, SocialButton } from './SocialButtons.styles';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <SocialBanner>
      <SocialButton href="https://www.facebook.com/profile.php?id=100091206572048" target="_blank" iconColor="#1877F2">
        <FaFacebookF className="social-icon" size={26}/>
        <span>Facebook</span>
      </SocialButton>
      <SocialButton href="https://www.instagram.com/pinzaslasvi/" target="_blank" iconColor="#E4405F">
        <FaInstagram className="social-icon" size={26}/>
        <span>Instagram</span>
      </SocialButton>
      <SocialButton href="https://www.youtube.com/@PinzasLasvi" target="_blank" iconColor="#FF0000">
        <FaYoutube className="social-icon" size={26}/>
        <span>Youtube</span>
      </SocialButton>
    </SocialBanner>
  );
};

export default SocialButtons;
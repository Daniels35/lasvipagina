import React from 'react';
import { SocialBanner, SocialButton } from './SocialButtons.styles';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <SocialBanner>
      <SocialButton href="#" iconColor="#1877F2">
        <FaFacebookF className="social-icon" size={26}/>
        <span>Facebook</span>
      </SocialButton>
      <SocialButton href="#" iconColor="#E4405F">
        <FaInstagram className="social-icon" size={26}/>
        <span>Instagram</span>
      </SocialButton>
      <SocialButton href="#" iconColor="#FF0000">
        <FaYoutube className="social-icon" size={26}/>
        <span>Youtube</span>
      </SocialButton>
    </SocialBanner>
  );
};

export default SocialButtons;
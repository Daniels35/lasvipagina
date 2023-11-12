import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    SocialBanner,
    SocialButton,
} from './HeaderAlt.Styles';
const HeaderAlt = () => {
    return (
        <SocialBanner>
        <SocialButton href="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
          <span>Facebook</span>
        </SocialButton>
        <SocialButton href="https://www.instagram.com/" target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </SocialButton>
        <SocialButton href="https://www.youtube.com/" target="_blank">
          <FaYoutube />
          <span>Youtube</span>
        </SocialButton>
      </SocialBanner>
    );
};

export default HeaderAlt;
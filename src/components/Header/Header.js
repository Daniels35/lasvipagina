import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {
  HeaderContainer,
  LogoContainer,
  Navigation,
  NavItem,
} from './Header.styles';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import logo from '../../assets/images/logo.webp';
const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/lasvipagina" onClick={closeMobileNav}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </LogoContainer>
      <HamburgerButton onClick={toggleMobileNav} open={mobileNavOpen}>
        <FiMenu size="2em" />
      </HamburgerButton>
      <Navigation open={mobileNavOpen} className={mobileNavOpen ? 'slide-in' : 'slide-out'}>
        <NavItem>
          <NavLink to="/lasvipagina"  activeclassname="active" onClick={closeMobileNav}>
            INICIO
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
        <NavItem>
          <NavLink to="/lasvipagina/pinzas"  activeclassname="active" onClick={closeMobileNav}>
            CÓMO SE USAN
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
        <NavItem>
          <NavLink to="/lasvipagina/about" activeclassname="active" onClick={closeMobileNav}>
            SOBRE CARLOS LASVI
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
        <NavItem>
          <NavLink to="/lasvipagina/use"  activeclassname="active" onClick={closeMobileNav}>
            PARA QUE SIRVEN
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/product" activeclassname="active" onClick={closeMobileNav}>
            PRODUCTOS
          </NavLink>
          <span className="separator">|</span>
        </NavItem> */}
        <NavItem>
          <NavLink to="/lasvipagina/blog" activeclassname="active" onClick={closeMobileNav}>
            BLOG
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
        <NavItem>
          <NavLink to="/lasvipagina/contact" activeclassname="active" onClick={closeMobileNav}>
            CONTACTO
          </NavLink>
          <span className="separator">|</span>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  background-color: #fff;
  box-shadow: 4px 2px 4px 2px rgba(0, 0, 0, 0.2);
`;
export const LogoContainer = styled.div`
  img {
    height: 300px;
    width: auto;
    margin: -30% 0 -30% -15%;
  }
  @media (max-width: 376px) {
    img {
      height: 190px;
      width: auto;
    margin: -30% 0 -30% 0%;
    }
  }
  @media (max-width: 840px){
    img {
      margin: -30% 0 -30% 0;
    }
  }
  @media (min-width: 841px) and (max-width: 1232px) {
    img {
      height: 200px;
      width: auto;
      margin: -30% 40 -30% -15%;
    }
  }
`;
export const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 840px) {
    display: block;
  }
  @media (max-width: 370px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
export const Navigation = styled.nav`
  @media (max-width: 840px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    opacity: 0.96;
    position: absolute;
    top: 200px;
    border-bottom: 8px solid #0098CA;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    z-index: 10;
    @media (max-width: 376px) {
      top: 150px;
    }
    &.slide-in {
      animation-name: slide-in;
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    &.slide-out {
      animation-name: slide-out;
      animation-duration: 0.8s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @media (min-width: 840px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }
`;
export const NavItem = styled.div`
  margin-left: 1.1rem;
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Nunito-Regular', sans-serif;
    color: black;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #0098CA;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s;
    }
    &:hover::after {
      transform: scaleX(1);
    }
    &.active::after,
    &.active {
      transform: scaleX(1);
      color: #0098CA;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .separator {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.4rem;
    color: black;
    opacity: 0.5;
    @media (max-width: 840px) {
      display: none;
    }
  }
  &:last-child .separator {
    display: none;
  }
  @media (max-width: 840px) {
    margin-top: 0.4rem;
  }
  @media (min-width: 841px) {
    margin-left: 0.4rem;
    .separator {
      margin.left: .1;
    }
    a {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 945px) {
    margin-left: 0.8rem;
    .separator {
      margin.left: .1;
    }
    a {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 1005px) {
    margin-left: 0.8rem;
    .separator {
      margin.left: .1;
    }
    a {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 1115px) {
    margin-left: 0.6rem;
    .separator {
      margin.left: .1;
    }
    a {
      font-size: 1.1rem;
    }
  }
`;
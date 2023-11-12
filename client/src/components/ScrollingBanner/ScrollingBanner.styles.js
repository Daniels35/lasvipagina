import styled from '@emotion/styled';

export const BannerContainer = styled.div`
background-color: #0098CA;
overflow: hidden;
width: calc(100% + 4rem); // Añade 4rem (2rem de cada lado) al ancho total
margin-left: -2rem; // Compensa el margen izquierdo del contenedor padre
height: 3rem;
margin-top: 2rem;
`;
export const ScrollingContent = styled.div`
  display: flex;
  margin-top: 0.5rem;
  white-space: nowrap;
  animation: scrolling linear infinite;
  animation-duration: 50s;
  @keyframes scrolling {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media (max-width: 768px) {
    animation-duration: 17s;
  }
`;
export const BannerText = styled.a`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  &::before {
    content: attr(data-text);
    white-space: nowrap;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: -10px;
  }
  &::before,
  & > * {
    margin-right: 1px;
  }
  & > *:last-child {
    margin-right: 0;
  }
  &:hover {
    color: white;
    animation: none;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: white;     
    }
  }
  animation: blink 3s linear infinite;
  @keyframes blink {
    0%,
    49.9%,
    100% {
      opacity: 1;
    }
    50%,
    99.9% {
      opacity: 0.5;
    }
  }
`;
export const AmazonIcon = styled(({ IconComponent, ...props }) => (
  <IconComponent {...props} />
))`
  margin: 0 25px !important;
  font-size: 2rem !important;
`;
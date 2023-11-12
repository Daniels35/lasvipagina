import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
  cursor: pointer;
  display: none;
  @media (max-width: 619px) {
    display: block;
  }
`;
export const CarouselImage = styled.img` 
  height: 100%;
  padding: 1% 1% 1% 1%;
  max-height: 450px; // Ajusta este valor según tus necesidades
  max-width: 750px;
  object-fit: fill;
  @media(max-width: 768px) {
    width: 100%;
  }
`;
export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  p {
    color: white;
    font-size: 1.5rem;
    text-align: center;
  }
  &:hover {
    opacity: 1;
  }
`;
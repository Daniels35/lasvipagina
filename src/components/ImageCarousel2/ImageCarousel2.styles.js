import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
  cursor: pointer;
`;
export const CarouselImage = styled.img` 
  height: 100%;
  padding: 1% 1% 1% 1%;
  max-height: 450px;
  max-width: 750px;
  object-fit: fill;
  @media(max-width: 768px) {
    width: 100%;
  }
`;
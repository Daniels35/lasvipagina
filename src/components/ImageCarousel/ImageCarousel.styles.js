import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  margin-bottom: 1.2rem;
`;
export const CarouselImage = styled.img`
  width: 100%;
  min-height: 450px;
  padding: 1% 1% 1% 1%;
  min-height: 450px;
  object-fit: fill;

  @media (max-width: 630px) {
    min-height: 200px;
  }
`;
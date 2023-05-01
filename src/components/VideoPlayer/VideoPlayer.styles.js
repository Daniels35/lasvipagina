import styled from '@emotion/styled';

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const VideoWrapper = styled.div`
  flex: 1;
  max-width: calc(33.333% - 2rem);
  @media (max-width: 1200px) {
    max-width: calc(50% - 2rem);
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 480px) {
    & > div {
      transform: scale(0.8);
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
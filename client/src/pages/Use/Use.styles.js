import styled from '@emotion/styled';

export const UseContainer = styled.div`
  padding: 2rem;
`;
export const ContentImage = styled.img`
width: 80%;
height: auto;
border-radius: 10px;
display: block;
margin: 1rem auto;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }
`;
export const ContentTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1rem 0rem 1rem;
  direction: ltr;
`;
export const ContentText = styled.p`
  line-height: 1.6;
  text-align: justify;
  margin: 2rem 1rem 2rem 1rem;
  font-size: 1.1rem;
  direction: ltr;
`;
export const LearnMoreButton = styled.button`
  background-color: #0098CA;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  font-family: 'Nunito-Bold', sans-serif;
  &:hover {
    opacity: 0.8;
  }
`;
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  &.left-image { 
    grid-template-columns: 1fr 1fr;
  }
  &.right-image {
    background-color: #f1f1f1;
    grid-template-columns: 1fr 1fr;
    direction: rtl;  
  }
  @media (max-width: 768px) {
    &.left-image,
    &.right-image {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
`;
export const ButtonContainer = styled.div`
  text-align: center;
`;
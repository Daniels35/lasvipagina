import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  padding: 2rem;
`;
export const ContentImage = styled.img`
width: 90%;
height: auto;
border-radius: 10px;
display: block;
margin: 1rem auto;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-top: 2rem;
  }
`;
export const ContentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const ContentText = styled.p`
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  a {
    color: #0098CA;
    text-decoration: underline;
  }
`;
export const LearnMoreButton = styled.button`
  background-color: #213058;
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
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .who{
    margin-left: 1rem;
  }
`;
export const ButtonContainer = styled.div`
  text-align: center;
`;
export const ContentImage2 = styled.img`
border-radius: 80%;
width: 250px;
height: 250px;
margin-bottom: 1rem;
margin-top: 1.2rem;
`;
export const ContentImage22 = styled.div`
text-align: center;
`;
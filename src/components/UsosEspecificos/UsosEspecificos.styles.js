import styled from '@emotion/styled';
import { LearnMoreButton } from '../../pages/Home/Home.styles';

export const UsosEspecificosContainer = styled.div`
  padding: 2rem;
`;
export const UsosEspecificosTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  text-align: center;
  color: white;
`;
export const UsosEspecificosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const UsosEspecificosItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0098CA;
  align-items: center;
  border-radius: 10px;
`;
export const UsosEspecificosImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 1.4rem;
  margin-bottom: 1rem;
`;
export const UsosEspecificosButton = styled(LearnMoreButton)`
  margin-top: auto;
  color: #0098CA;
  background-color: white;
  margin-bottom: 1.4rem;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    background-color: white;
    opacity: 0.6;
  }
`;
export const Centrado = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 2rem;
margin-top: 2rem;
margin-left: 180px;
margin-right: 180px;
justify-content: center;
min-width: 55%;
margin-bottom: 1rem;
@media (max-width: 768px) {
  grid-template-columns: 1fr;
  margin-left: 0rem;
margin-right: 0rem;
}
`;
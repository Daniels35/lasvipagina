import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  padding: 2rem;
`;
export const ContactInfoContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.1rem;
  & > * {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
`;
export const ContactInfoIcon = styled.div`
  background-color: #0098CA;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;
export const ContactInfoText = styled.p`
  font-size: 1.1rem;
  font-family: 'Nunito-Bold', sans-serif;
  text-align: center;
`;
export const ContactFormContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 2rem;
  & > * {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 769px) {
    margin: 0 3rem 0 3rem; // Reducir el margen en pantallas medianas
  }
  @media (min-width: 1101px) {
    margin: 0 20rem 0 20rem; // Mantener el margen en pantallas grandes
  }
`;
export const ContactTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`;
export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FormInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Nunito-Regular', sans-serif;
`;
export const FormTextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  resize: none;
  font-family: 'Nunito-Regular', sans-serif;
`;
export const SubmitButton = styled.button`
  background-color: #0098CA;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  font-family: 'Nunito-Bold', sans-serif;
  margin-top: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const LogoImage = styled.img`
  width: 350px; // Puedes cambiar el tamaño según sea necesario
  height: 350px; // Puedes cambiar el tamaño según sea necesario
  border-radius: 50%;
  object-fit: cover;
  margin: -6.8rem 0 -6rem 0;
`;
export const Question = styled.p`
  font-size: 1.5rem;
  font-family: 'Nunito-Bold', sans-serif;
  text-align: center;
  margin: 1.8rem 0 1.8rem 0;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    font-size: 1.3rem; // Reducir el tamaño de fuente en pantallas medianas
  }
`;
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: -2rem;
  gap: 0.5rem;
  #link {
    color: #0098CA;
    &: hover {
      opacity: 0.5;
    }
  }
`;
export const ClearButton = styled.button`
  background-color: #FF4C4C;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.9rem;
  font-family: 'Nunito-Bold', sans-serif;
  margin-top: 1rem;
  margin-left: 1rem;
  &:hover {
    opacity: 0.8;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoadingOverlay = styled.div`
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  justify-content: center;
  align-items: center;
`;
export const ImageContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const StyledImage = styled.img`
  max-width: 70%;
  height: auto;
  @media (max-width: 768px) {
    max-width: 120%;
    max-height: auto;
  }
`;
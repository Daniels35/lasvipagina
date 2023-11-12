import styled from '@emotion/styled';

export const ScrollToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background-color: #0098ca;
  color: white;
  border: 1.5px solid white;
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1000;
  transition: background-color 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContactButton = styled(Link)`
  background-color: #213058;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Decalotype-Bold;
  &:hover {
    opacity: 0.8;
  }
`;
export const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
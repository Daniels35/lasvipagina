
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1rem;
  h2 {
    text-align: center;
  }
`;
export const CategoryButton = styled.button`
  background-color: #0098CA;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    display: none;
  }
  &:focus {
    box-shadow: 0 0 20px rgba(0, 152, 202, 0.5);
    border-color: #007a9b;
  }
`;

export const CategorySelect = styled.select`
  display: none;
  border-radius: 20px;
  text-align: center;
  border-color: #0098CA;
  color: #0098CA;
  margin: 0 auto; // Agrega esto para centrar el elemento
  background-color: white; // Agrega esto para establecer el fondo blanco
  user-select: none;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    display: block;
  }
  &:focus {
    box-shadow: 0 0 5px rgba(0, 152, 202, 0.5);
    border-color: #007a9b;
  }
  option:checked,
  option:focus,
  option:hover {
    color: white;
    background-color: #0098CA;
  }
`;
export const SearchInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #0098CA;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease-in-out;
  max-width: 100%;
  margin: 8px 0;
  &:focus {
    box-shadow: 0 0 5px rgba(0, 152, 202, 0.5);
    border-color: #007a9b;
  }
  &::placeholder {
    color: #aaa;
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const Content = styled.div`
  flex: 1;
`;
export const ButtonAndSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
    button {
      margin-left: 1rem;
    }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 0.2rem;
    }
  }
`;
export const SearchButton = styled.button`
  background-color: #0098CA;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  transition-duration: 0.4s;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(0, 152, 202, 0.5);
    border-color: #007a9b;
  }
`;
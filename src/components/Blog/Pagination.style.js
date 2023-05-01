import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PaginationButton = styled.button`
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
  &:focus {
    box-shadow: 0 0 5px rgba(0, 152, 202, 0.5);
    border-color: #007a9b;
  }
`;
export const PaginationText = styled.span`
  font-size: 16px;
  margin: 4px 8px;
  color: #0098CA;
`;
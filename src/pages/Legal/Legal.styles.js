import styled from 'styled-components';

export const LegalContainer = styled.div`
  padding: 2rem;
`;
export const LegalTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const LegalText = styled.p`
  margin-bottom: 1rem; 
  text-align: justify;
  ul {
    margin-top: 0;
  }
  li {
    margin-bottom: 0.5rem;
    list-style: disc;
    list-style-position: inside;
  }
`;
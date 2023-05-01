import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0098CA;
  color: #fff;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const FooterLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0.1rem;
  }
`;
export const FooterLink = styled.li`
  margin-left: 1rem;
  &:first-of-type {
    margin-left: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #ccc;
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
`;
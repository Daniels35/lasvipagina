// components/SocialButtons/styles.js
import styled from '@emotion/styled';

export const SocialBanner = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0098CA;
  padding: 1rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;
export const SocialButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  .social-icon {
    background-color: white;
    border-radius: 50%;
    padding: 0.3rem;
    color: ${props => props.iconColor};
  }
  & > span {
    margin-left: 0.5rem;
  }
  &:hover {
    text-decoration: underline;
    color: #FBF9F9;
  }
  @media (max-width: 370px) {
    font-size: 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 0.3rem;
  }
`;
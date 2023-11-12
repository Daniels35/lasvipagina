import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
export const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const AboutContent = styled.div`
  text-align: left;
  max-width: 800px;
  font-size: 1.2rem;
  text-align: justify;
  margin: 1rem 0 1rem 0;
  .sing {
    text-align: right;
  }
  a {
    color: #0098CA;
    text-decoration: underline;
  }
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;
export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const PinzasBanner = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }
`;
// Post.styles.js
import styled from '@emotion/styled';

export const PostContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;
export const Category = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #213058;
  margin-bottom: 0.5rem;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
export const PostImage = styled.img`
  max-width: 30%;
  max-height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border: 2px solid #0098CA;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: 768px) {
    max-width: 80%;
    height: auto;
  }
`;
export const Summary = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: justify;
`;
export const Author = styled.h6`
  font-size: 1.4rem;
  margin-bottom: -0rem;
`;
export const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;
export const FullWidthContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
export const RecommendedContainer = styled.div`
  margin-top: 2rem;
`;
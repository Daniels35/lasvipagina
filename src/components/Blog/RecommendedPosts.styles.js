import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RecommendedContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const RecommendedTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;
export const RecommendedPost = styled.div`
  margin-bottom: 1rem;
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid #0098CA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: #213058;
  margin: 0 0.3rem 0.3rem 0.3rem;
  text-align: center;
`;
export const PostCategory = styled.p`
  font-size: 1.1rem;
  color: #777;
  text-align: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #213058;
  display: block;
  text-align: center;
`;
export const PostImage = styled.img`
  width: 70%;
  height: auto;
  margin-top: 0.8rem;
  object-fit: cover;
  border-radius: 20px;
  item-align: center;
  margin-bottom: 1rem;
`;
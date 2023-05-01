// components/RecommendedPosts/RecommendedPosts.js
import React from 'react';
import {
  RecommendedContainer,
  RecommendedTitle,
  RecommendedPost,
  PostTitle,
  PostCategory,
  StyledLink,
  PostImage
} from './RecommendedPosts.styles';

const RecommendedPosts = ({ posts }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth',
    });
  };
  
  return (
    <RecommendedContainer>
      <RecommendedTitle>Publicaciones recomendadas</RecommendedTitle>
      {posts.map((post) => (
        <RecommendedPost key={post.id}>
          <StyledLink to={`/blog/${post.id}`} onClick={scrollToTop}>
            <PostImage src={post.image_url} alt={post.title} />
            <PostTitle>{post.title}</PostTitle>
            <PostCategory>Categoría: {post.category}</PostCategory>
          </StyledLink>
        </RecommendedPost>
      ))}
    </RecommendedContainer>
  );
};

export default RecommendedPosts;
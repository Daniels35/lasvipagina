import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Helmet } from 'react-helmet';
import RecommendedPosts from '../../components/Blog/RecommendedPosts';
import FormattedDate from '../../components/Blog/FormattedDate';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import ScrollingBanner from '../../components/ScrollingBanner/ScrollingBanner';
import {
  PostContainer,
  Category,
  Title,
  PostImage,
  Summary,
  Author,
  Content,
  FullWidthContainer,
  RecommendedContainer, 
} from './Post.styles';
import PromotedProduct from '../../components/PromotedProduct/PromotedProduct';
import image1 from '../../assets/images/pinzas.webp';

const Post = () => {
  const sampleProduct = {
    image_url: image1,
    title: 'Producto promocionado',
    description: 'Descubre las pinzas Lasvi y experimenta alivio en cuello, espalda y articulaciones. Estas innovadoras pinzas actúan sobre la zona auricular, equilibrando el funcionamiento de las terminaciones nerviosas desde la columna vertebral y ayudándote a aliviar diversos síntomas. No dejes que el dolor limite tu vida, contáctanos hoy mismo para obtener más información sobre cómo las pinzas Lasvi pueden mejorar tu bienestar.',
    link: 'https://example.com/product-link',
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://carwashmanager.online/posts/${postId}`);
        const data = await response.json();
        setPost(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener el post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendedPosts();

    fetchData();
  }, [postId]);
  const fetchRecommendedPosts = async () => {
  try {
    const limit = 3;
    const countResponse = await fetch(`https://carwashmanager.online/posts/count`);
    const totalCount = await countResponse.json();
    const randomIndices = new Set();
    while (randomIndices.size < limit) {
      const randomIndex = Math.floor(Math.random() * totalCount) +1;
      if (randomIndex !== parseInt(postId)) {
        randomIndices.add(randomIndex);
      }
    }
    const postsPromises = Array.from(randomIndices).map((index) =>
      fetch(`https://carwashmanager.online/posts/${index}`).then((response) =>
        response.json()
      )
    );
    const data = await Promise.all(postsPromises);
    setRecommendedPosts(data);
  } catch (error) {
    console.error('Error al obtener las publicaciones recomendadas:', error);
  }
};
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
      <PostContainer>
      <Helmet>
        <title>{`${post.title} - Pinzas Lasvi`}</title>
        <meta name="description" content={post.summary} />
        <meta property="og:image" content={post.image_url} />
        <meta charset="UTF-8" />
      </Helmet>
      <Category>{post.category}</Category>
      <Title>{post.title}</Title>
      <Summary>{post.summary}</Summary>
      <Author>Por {post.author}</Author>
      <p>Publicado el <FormattedDate dateString={post.created_at} /></p>
      <FullWidthContainer>
      <SocialButtons />
      </FullWidthContainer>
      <PostImage src={post.image_url} alt={post.title} />
      <Content>{post.content}</Content>
      <PromotedProduct product={sampleProduct} />
      <ScrollingBanner />
      <RecommendedContainer>
      <RecommendedPosts posts={recommendedPosts} />
      </RecommendedContainer>
    </PostContainer>
  );
};

export default Post;
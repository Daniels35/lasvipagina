import React, { useEffect, useState } from 'react';
import PostList from '../../components/Blog/PostList';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/Blog/Pagination';
import { Helmet } from 'react-helmet';
import { Container,
CategoryButton, 
CategorySelect,
SearchInput,
PaginationContainer,
SearchContainer,
Content,
ButtonAndSearchContainer,
SearchButton } from './Blog.style';
import DOMPurify from 'dompurify';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [pendingSearchTerm, setPendingSearchTerm] = useState('');
  const categories = [
    'Acupuntura',
    'Dolor de espalda',
    'Control de peso',
    'Control de ansiedad',
    'Ejercicio físico',
    'Relajación',
  ];
  useEffect(() => {
    fetchPosts();
  }, [currentPage, category, searchTerm]);
  const fetchPosts = () => {
    let url = `https://carwashmanager.online/posts?page=${currentPage}&limit=6`;
    if (category) {
      url += `&category=${category}`;
    }
    if (searchTerm) {
      url += `&search=${searchTerm}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener los posts:', error);
        setIsLoading(false);
      });
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearchInputChange = (event) => {
  const userInput = event.target.value;
  const sanitizedInput = DOMPurify.sanitize(userInput);
  setPendingSearchTerm(sanitizedInput);
};
  const handleSearchButtonClick = () => {
    setSearchTerm(pendingSearchTerm);
    setCurrentPage(1);
  };
  const handleSearchInputClear = () => {
    setPendingSearchTerm('');
    setSearchTerm('');
    setCurrentPage(1);
  };
  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };
  return (
    <Container>
      <Helmet>
        <title>Blog - Pinzas Lasvi</title>
        <meta name="description" content="Descubre el poder de las Pinzas Lasvi para aliviar molestias de cuello, espalda y otros síntomas. Aprende sobre acupuntura auricular, técnicas de colocación y consejos para mejorar tu bienestar con nuestras herramientas innovadoras desarrolladas por expertos en acupuntura." />
      </Helmet>
      <SearchContainer>
  <label>
    <span className="search-container">
      <div style={{ position: "relative" }}>
        <SearchInput
          type="text"
          value={pendingSearchTerm}
          onChange={handleSearchInputChange}
          placeholder="Buscar con palabra clave..."
        />
        {pendingSearchTerm && (
          <span className="clear-input" onClick={handleSearchInputClear}>
            &times;
          </span>
        )}
      </div>
    </span>
  </label>
  <SearchButton onClick={handleSearchButtonClick}>Buscar</SearchButton>
</SearchContainer>    
          <ButtonAndSearchContainer>
            <CategoryButton
              onClick={() => setCategory('')}
              style={{ backgroundColor: category === '' ? '#007a9b' : undefined }}
            >
              Todas las categorías
            </CategoryButton>
            {categories.map((cat) => (
              <CategoryButton
                key={cat}
                onClick={() => setCategory(category === cat ? '' : cat)}
                style={{ backgroundColor: category === cat ? '#007a9b' : undefined }}
              >
                {cat}
              </CategoryButton>
            ))}
          </ButtonAndSearchContainer>
      
          <CategorySelect
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </CategorySelect>  
          <Content>
            <PostList key={`${category}-${searchTerm}`} posts={posts} searchTerm={searchTerm} highlightSearchTerm={highlightSearchTerm} />
          </Content>      
          <PaginationContainer>
            {isLoading ? null : (
              <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
            )}
          </PaginationContainer>
        </Container>
      );
    }  
    
    export default Blog;
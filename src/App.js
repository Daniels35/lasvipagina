import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { MainLayout, MainContent } from './MainLayout.styles';
import Use from './pages/Use/Use';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Pinzas from './pages/Pinzas/Pinzas';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import TextChatBot from './components/TextChatBot/TextChatBot';
import HeaderAlt from './components/HeaderAlt/HeaderAlt';
import Post from './components/Blog/Post';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import Legal from './pages/Legal/Legal';
import ScrollToTopButton from '../src/components/ScrollToTopButton/ScrollToTopButton';
// Importa las demás páginas según sea necesario
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout>
          {/* <HeaderAlt /> */}
          <Header />
          <MainContent>
            <Routes>
              <Route path="/lasvipagina" element={<Home />} />
              <Route path="/lasvipagina/pinzas" element={<Pinzas />} />
              <Route path="/lasvipagina/about" element={<About />} />
              <Route path="/lasvipagina/use" element={<Use />} />
              <Route path="/lasvipagina/product" element={<Courses />} />
              <Route path="/lasvipagina/blog" element={<Blog />} />
              <Route path="/lasvipagina/blog/:postId" element={<Post />} />
              <Route path="/lasvipagina/blog/new" element={<NewPostPage />} />
              <Route path="/lasvipagina/contact" element={<Contact />} />
              <Route path="/lasvipagina/legal" element={<Legal />} />
              {/* Añade más rutas según sea necesario */}
            </Routes>
            <WhatsAppButton />
            <ScrollToTopButton />
            {/* <TextChatBot /> */}
          </MainContent>
          <Footer />
        </MainLayout>
      </ThemeProvider>
    </Router>
  );
};
export default App;
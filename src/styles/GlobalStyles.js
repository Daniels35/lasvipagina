import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* Reset de estilos del navegador */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Configuración de tipografías */
        body {
          font-family: 'Nunito-Regular', sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #333;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Decalotype-Bold', sans-serif;
          color: #0098CA;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        p {
          font-family: 'Nunito-Regular', sans-serif;
        }

        a {
          user-select: none;
          color: inherit;
          text-decoration: none;
          
          transition: color 0.3s ease;
        }

        

        strong {
          font-family: 'Nunito-Bold', sans-serif;
        }

        .search-container .clear-input {
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          font-size: 25px;
          color: red;
          cursor: pointer;
          z-index: 2;
          font-weight: bold;
          
          &:hover {
            font-size: 35px;
          }
        }    
      `}
    />
  );
};

export default GlobalStyles;
import styled from '@emotion/styled';

export const SocialBanner = styled.div`
  display: flex;
  justify-content: space-around; // Cambiar a space-around para distribuir los botones en todo el banner
  background-color: #0098CA; // Agregar el color de fondo al banner
  padding: 1rem 0; // Añadir padding vertical para dar espacio a los botones
  margin-bottom: 1rem;
`;
export const SocialButton = styled.a`
  color: white;
  text-decoration: none;
  display: flex; // Cambiar a flex para ajustar la distribución del ícono y el texto
  align-items: center; // Alinear verticalmente el ícono y el texto
  & > span {
    margin-left: 0.5rem; // Agregar margen a la izquierda del texto
  }
  &:hover {
    text-decoration: underline;
    color: #FBF9F9;
  }
`;
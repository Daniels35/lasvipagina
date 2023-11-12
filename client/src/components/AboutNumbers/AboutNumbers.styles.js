import styled from '@emotion/styled';

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px black;
  width: 250px; // Establece un ancho fijo para que todos los cuadros tengan el mismo tamaño
  height: 150; // Esto permitirá que la altura se ajuste al contenido
  min-height: 230px; // Establece una altura mínima para que todos los cuadros tengan al menos esta altura
  flex-grow: 1; // Esto permitirá que los cuadros crezcan en función del espacio disponible
`;
export const Description = styled.p`
  text-align: center;
`;
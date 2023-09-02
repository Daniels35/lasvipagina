import styled from '@emotion/styled';

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
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 4rem;
  text-align: center;
`;
export const PinzasContent = styled.div`
  text-align: left;
  max-width: 800px;
  font-size: 1.2rem;
  text-align: justify;
  margin: 1rem auto;
  margin-bottom: 1.5rem;
  @media(max-width: 768px) {
    margin: 1.5rem; 
  }
  .ampliacion-imagen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .ampliacion-imagen img {
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .capa-fondo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;  
  }
`;
export const VideoWrapper = styled.div`
  max-width: 560px; /* igual o menor que la anchura del iframe */
  height: 400px;
  border: 2px solid #0098ca;
  box-sizing: border-box; /* añade esta propiedad */
  margin: 1rem auto;
  margin-top: 2rem;
  margin-bottom: 2rem; 
  iframe {
    width: 100%;
    height: 100%;
    border: none; /* añade esta propiedad para eliminar completamente los bordes */
  }
`;
export const CardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 4px;
  border: 2px solid #0098ca;
  max-width: 800px;
  margin: 1rem auto;  
`;
export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #0098ca;
`;
export const CardContent = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  margin: 1.2rem 0;
`;
export const UseContainer = styled.div`
  padding: 2rem;
`;
export const ContentImage = styled.img`
width: 80%;
height: auto;
border-radius: 10px;
display: block;
margin: 1rem auto; 
`;
export const ContentTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1rem 0rem 1rem;
  direction: ltr;
  text-align: center;
`;
export const ContentText = styled.p`
  line-height: 1.6;
  text-align: justify;
  margin: 2rem 2rem 2rem 2rem;
  font-size: 1.1rem;
  direction: ltr;
`;
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  &.left-image {  
    grid-template-columns: 1fr 1fr;
  }
  &.right-image {
    background-color: #f1f1f1;
    grid-template-columns: 1fr 1fr;
    direction: rtl;  
  }
  @media (max-width: 768px) {
    &.left-image,
    &.right-image {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
`;
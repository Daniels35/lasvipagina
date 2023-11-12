import styled from '@emotion/styled';

export const TestimoniosContainer = styled.div`
  margin: 0 auto 0 25px;
`;
export const TestimonioWrapper = styled.div`
  background-color: #f1f1f1;
  border-radius: 10px;
  text-align: center;
  max-width: 90%;
  max-height: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-height: 350px;
  }
`;
export const TestimonioImage = styled.img`
  border-radius: 50%;
  width: 80px;
  margin: 0 auto;
  margin-bottom: 1.1rem;
  margin-top: 1.1rem;
`;
export const TestimonioNombre = styled.h4`
  margin-bottom: 0.5rem;
`;
export const TestimonioTexto = styled.p`
max-height: 90px;
overflow-y: auto; 
padding: 0 1rem; 
@media (max-width: 768px) {
  max-height: 110px;
} 
  margin-bottom: 1rem;
`;
export const Calificacion = styled.div`
  font-size: 1.5rem;
  color: #ffbb2c;
  margin-top: 1rem;
`;
export const ContentTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const ContentText = styled.p`
  line-height: 1.5rem;
  text-align: justify;
  margin-bottom: 2rem;
  font-size: 1rem;
  text-align: center;
  
`;
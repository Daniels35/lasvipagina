// components/PromotedProduct/PromotedProduct.styles.js
import styled from '@emotion/styled';

export const PromotedProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem 0;
  text-align: center;
`;
export const ProductImage = styled.img`
  width: 400px;
  height: 220px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 2px solid #0098CA;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const ProductDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
export const ProductButton = styled.a`
  display: inline-block;
  background-color: #0098ca;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    background-color: #0078a7;
  }
`;
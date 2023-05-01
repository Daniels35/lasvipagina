// components/PromotedProduct/PromotedProduct.js
import React from 'react';
import {
  PromotedProductContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  
} from './PromotedProduct.styles';
import ContactButtonComponent from '../ContactButton/ContactButton';

const PromotedProduct = ({ product }) => {
  return (
    <PromotedProductContainer>
      <ProductImage src={product.image_url} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ContactButtonComponent />
      
    </PromotedProductContainer>
  );
};

export default PromotedProduct;

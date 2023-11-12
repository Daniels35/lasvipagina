import React from 'react';
import { PaginationContainer, PaginationButton, PaginationText } from './Pagination.style';

const Pagination = ({ currentPage, onPageChange }) => {
  const handleChange = (direction) => {
    onPageChange(currentPage + direction);
  };

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PaginationButton onClick={() => handleChange(-1)}>
          Anterior
        </PaginationButton>
      )}
      <PaginationText>Página {currentPage}</PaginationText>
      <PaginationButton onClick={() => handleChange(1)}>
        Siguiente
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;


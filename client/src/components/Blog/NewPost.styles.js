import styled from '@emotion/styled';

export const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 600px;
  
`;
export const FormLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem 0;
  width: 100%;
`;
export const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const FormTextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;
export const FormSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  font-size: 1.2rem;
  background-color: #0098ca;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #0077a6;
  }
`;
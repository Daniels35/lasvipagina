import React, { useState } from 'react';
import styled from '@emotion/styled';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  max-width: 400px;
`;
const FormLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem 0;
  width: 100%;
`;
const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const FormButton = styled.button`
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
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const validUsername = 'antropica';
    const validPassword = 'alejandra2116';
    if (username.trim() === validUsername && password.trim() === validPassword) {
      onLogin(true);
    } else {
      alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  };
  return (
    <LoginForm onSubmit={handleSubmit}>
      <FormLabel>
        Nombre de usuario:
        <FormInput
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Contraseña:
        <FormInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormLabel>
      <FormButton type="submit">Iniciar sesión</FormButton>
    </LoginForm>
  );
};

export default Login;
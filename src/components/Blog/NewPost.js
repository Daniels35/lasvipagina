import React, { useState } from 'react';
import {
  NewPostForm,
  FormLabel,
  FormInput,
  FormTextArea,
  FormSelect,
  FormButton,
} from './NewPost.styles';
import Login from './Login';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [category, setCategory] = useState('Acupuntura');
  const [summary, setSummary] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      title,
      content,
      author,
      created_at: new Date().toISOString(),
      image_url,
      category,
      summary,
    };
    fetch('pinzaslasvi.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post creado exitosamente:', data);
        // Aquí puedes redirigir al usuario al blog o al post específico
        alert('Post creado exitosamente.');
        handleClear();
      })
      .catch((error) => {
        console.error('Error al crear el post:', error);
        alert('Error al crear el post.');
      });
  };
  const handleClear = () => {
    setTitle('');
    setContent('');
    setAuthor('');
    setImageUrl('');
    setCategory('Acupuntura');
    setSummary('');
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }
  return (
    <NewPostForm onSubmit={handleSubmit}>
      <FormLabel>
        Título:
        <FormInput
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        URL de la imagen:
        <FormInput
          type="text"
          value={image_url}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Resumen:
        <FormTextArea
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Contenido:
        <FormTextArea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Autor:
        <FormInput
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Categoría:
        <FormSelect value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="Acupuntura">Acupuntura</option>
          <option value="Dolor de espalda">Dolor de espalda</option>
          <option value="Control de peso">Control de peso</option>
          <option value="Control de ansiedad">Control de ansiedad</option>
          <option value="Ejercicio físico">Ejercicio físico</option>
          <option value="Relajación">Relajación</option>
        </FormSelect>
        </FormLabel>
    <FormButton type="submit">Crear post</FormButton>
    <FormButton type="button" onClick={handleClear}>Borrar</FormButton>
  </NewPostForm>
);
};

export default NewPost;
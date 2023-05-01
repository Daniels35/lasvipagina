import React from 'react';
import NewPost from '../../components/Blog/NewPost';

const NewPostPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '1.5rem' }}>Crear nuevo post</h1>
      <NewPost />
    </div>
  );
};
export default NewPostPage;
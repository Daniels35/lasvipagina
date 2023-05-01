import React from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';
import './index.css'; // Puedes omitir esta línea si no estás utilizando un archivo CSS global.
import App from './App';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
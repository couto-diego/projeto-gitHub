import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18
import App from './App';

// Cria a raiz da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
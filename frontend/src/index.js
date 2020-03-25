//index.js é o primeiro arquivo javascript que o index.html irá ler

import React from 'react';
import ReactDOM from 'react-dom'; //integração com o navegador; DOM -> árvore de elementos;
import App from './App';

//mostrando na tela (renderizando). Está renderizando e colocando o App dentro da div com o id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';

import './global.css';

import Routes from './routes';

//Dica: em toda aplicação web, criar um arquivo de CSS global, global.css
//não é necessário importar o index.js, já que ele será o primeiro a ser procurado na pasta

//Quando o HTML estiver dentro de uma função JavaScript, ele é chamado de JSX:
//  JSX = (JavaScript XML)
//Componente básico:
function App() {
  //Estado em React: toda vez que o estado é alterado, será remontado (renderizado novamente) o componente, exibindo as novas informações em tela;    
  return (
    <Routes/>
  );
}

export default App;

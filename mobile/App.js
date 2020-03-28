import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

//O React Native não possui as mesmas tags do HTML;
//Tag <View></View> pode ser utilizada no lugar de uma <div>, <header>, <footer>, <aside>, etc
//No React Native não existe a semântica do HTML;
//Todos os elementos do React Native, possuem DISPLAY: "FLEX" por padrão. Não existe display block, inline-block, etc
//Todos os valores que não são números devem ser escritos entre aspas simples ''
export default function App() {
  return (
    <Routes/>
  );
}
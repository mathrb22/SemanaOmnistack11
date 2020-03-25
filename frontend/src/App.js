import React, { useState } from 'react';
import Header from './Header';

//Quando o HTML estiver dentro de uma função JavaScript, ele é chamado de JSX:
//  JSX = (JavaScript XML)
//Componente básico:
function App() {

  //[counter,] terá o valor da posição [0]
  //[, setCounter] -> função responsável por alterar o valor de counter
  const [counter, setCounter] = useState(0); //variável do tipo LET (para poder ser alterada), ao invés de uma CONST
  //o método useState() retorna um array com 2 posições:
  //  [valor, funcaoDeAtualizacaoDesseValorOriginal] 

  function increment(){
    setCounter(counter + 1);
    //nesse caso, apenas aparecerá o resultado no console, o elemento da interface não será alterado, pois não estamos usando um ESTADO
  }

  //Estado em React: toda vez que o estado é alterado, será remontado (renderizado novamente) o componente, exibindo as novas informações em tela;
    
  return (
    <div>
    <Header>Contador: {counter}</Header> 
    <button onClick= {increment}>Incrementar</button>    

    </div>
    //utilizando o conceito de propriedades para os componentes. Nesse caso, neste arquivo, o Header é um componente externo (de outro arquivo js)
  );
}

export default App;

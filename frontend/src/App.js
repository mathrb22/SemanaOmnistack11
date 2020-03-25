import React from 'react';
import Header from './Header';

//Quando o HTML estiver dentro de uma função JavaScript, ele é chamado de JSX:
//  JSX = (JavaScript XML)
//Componente básico:
function App() {

  let counter = 0; //variável do tipo LET (para poder ser alterada), ao invés de uma CONST

  function increment(){
    counter += 1;
    console.log(counter);
    //nesse caso, apenas aparecerá o resultado no console, o elemento da interface não será alterado, pois não estamos usando um ESTADO
  }
  
  return (
    <div>
    <Header>Contador: {counter}</Header> 
    <button onClick= {increment}>Incrementar</button>    

    </div>
    //utilizando o conceito de propriedades para os componentes. Nesse caso, neste arquivo, o Header é um componente externo (de outro arquivo js)
  );
}

export default App;

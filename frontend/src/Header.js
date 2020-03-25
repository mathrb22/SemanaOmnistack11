//Em todo lugar que for utilizar JSX, deve importar o React:
import React from 'react';

export default function Header({ children }) { //para receber as propriedades dos componentes definidas em App.js, utilizaremos os parâmetros da função com PROPS. Nesse caso iremos desestruturar as PROPS (entre {})
    return ( //ao invés de utilizar um texto pronto dentro do h1, iremos usar o parâmetro props recebido e o componente header
        <header>
            <h1> { children } </h1> 
        </header>
    ); //Para inserir um código JavaScript (variáveis, funções, etc) dentro do HTML, colocar entre chaves:   <h1> {codigo javascript} </h1>
}       //outra propriedade que pode ser usada é props.children; Assim, no <Header></Header> em App.js não é preciso enviar um texto com a propriedade "title"


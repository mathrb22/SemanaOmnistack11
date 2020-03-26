import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Switch irá garantir que apenas 1 rota seja chamada por vez no momento
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

//as rotas também serão componentes:
export default function Routes() {
    return( //BrowserRouter precisa estar por volta de tudo
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Logon} /> 
                <Route path = "/register" component = {Register} />
                <Route path = "/profile" component = {Profile} />
            </Switch>
        </BrowserRouter>
    );
}
//O react verifica se as rotas começam com path="/", então para a página inicial (login), utilizar a propriedade EXACT, que ter que ser exatamente a mesma URL
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Switch irá garantir que apenas 1 rota seja chamada por vez no momento
import Logon from './pages/Logon';

//as rotas também serão componentes:
export default function Routes() {
    return( //BrowserRouter precisa estar por volta de tudo
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Logon} />
            </Switch>
        </BrowserRouter>
    );
}
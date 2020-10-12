import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'; //Trocar as âncoras em HTML por <Link/>, e os href="" por to=""
//Para importar o pacote de ícones desejado:
//Utilizar as chaves {} para importar ícones específicos (fezendo a desestruturação)
import { FiLogIn } from 'react-icons/fi'; //Feather-icons //CTRL + SPACE = para abrir a caixa de opções dentro das chaves {};
//Os ícones componentes aceitam como props size e color;

import api from '../../services/api';

import './styles.css'; //Usando o './' para referenciar um arquivo na mesma pasta (diretório); '../' para voltar uma pasta 
//Para utilizar imagens e svg, iremos importá-las também:
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

//Não utilizar class na propriedade pois class é uma palavra reservada do JavaScript
export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault(); //Fazer isso em todo formulário no React

        try {
            const response = await api.post('sessions', { id });
            //Como os dados precisam estar visíveis por toda aplicação, aplicar no localStorage do navegador:
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        } catch(err) {
            alert('Falha no Login! Tente novamente.')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>

                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        required
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="backlink" to="/register">
                        <FiLogIn size={22} color="#E02041" /> 
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}

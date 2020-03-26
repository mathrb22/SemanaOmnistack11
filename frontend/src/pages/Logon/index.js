import React from 'react';
//Para importar o pacote de ícones desejado:
//utizar as chaves {} para importar ícones específicos (fezendo a desestruturação)
import { FiLogIn } from 'react-icons/fi'; //feather-icons //CTRL + SPACE = para abrir a caixa de opções dentro das chaves {};
//os ícones componente aceitam como props size e color;

import './styles.css'; //usando o './' para referenciar um arquivo na mesma pasta (diretório); '../' para voltar uma pasta 
//Para utilizar imagens e svg, iremos importá-las também:
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>

                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" /> 
                        Não tenho cadastro
                    </a>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
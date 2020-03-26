import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

//Todo componente possui uma tag STYLE
//  style = {{ }}   -> a primeira chave significa que estou incluindo um código JavaScript dentro do HTML;
//                  -> a segunda chave (interna) significa que estou incluindo um OBJETO do JavaScript;

import logoImg from '../../assets/logo.svg';
export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="backlink" to="/">
                        <FiArrowLeft size={22} color="#E02041" /> 
                        Voltar para Logon
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
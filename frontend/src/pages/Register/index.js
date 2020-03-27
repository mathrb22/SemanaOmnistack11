import React, { useState } from 'react';

import api from '../../services/api'

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

//Todo componente possui uma tag STYLE
//  style = {{ }}   -> a primeira chave significa que estou incluindo um código JavaScript dentro do HTML;
//                  -> a segunda chave (interna) significa que estou incluindo um OBJETO do JavaScript;

import logoImg from '../../assets/logo.svg';
export default function Register() {

    //alterações de estado dos submits
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); 

    async function handleRegister(e) {
        //função de registro que será executada toda vez que o usuário clicar em submit no form
        //evento esperado pela função: submit
        e.preventDefault(); //para prevenir o comportamento padrão do formulário que é de recarregar a página;

        const data = {
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        };

        try {

            const response = await api.post('ongs', data); //enviar o objeto javascript data para a rota /ongs

            alert(`Seu ID de acesso: ${response.data.id}`) //usando crases para utilizar variáveis dentro da string
            history.push('/'); //history.push : enviar o usuário para uma rota específica
        }
        catch (err) {
            alert('Erro no cadastro, tente novamente.'); 
        }
    }

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

                <form onSubmit={handleRegister}>

                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        required
                        onChange={e => setName(e.target.value)}   //arrowfunction //valor do input sendo colocado dentro da variável name                 
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        required
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            required
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80}} 
                            value={uf}
                            required
                            maxlength="2"
                            // onblur="this.value=this.value.toUpperCase()"
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}
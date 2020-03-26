import React from 'react';
import { FiLogOut, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button type="button">
                    <FiLogOut size={24} color="#e02041"></FiLogOut>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus accumsan felis nec faucibus. Fusce mattis aliquam est, non blandit massa aliquet in. Nam porttitor in urna ac tristique.</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size="28"/>
                    </button>

                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus accumsan felis nec faucibus. Fusce mattis aliquam est, non blandit massa aliquet in. Nam porttitor in urna ac tristique.</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size="28"/>
                    </button>

                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus accumsan felis nec faucibus. Fusce mattis aliquam est, non blandit massa aliquet in. Nam porttitor in urna ac tristique.</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size="28"/>
                    </button>

                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus accumsan felis nec faucibus. Fusce mattis aliquam est, non blandit massa aliquet in. Nam porttitor in urna ac tristique.</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size="28"/>
                    </button>

                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus accumsan felis nec faucibus. Fusce mattis aliquam est, non blandit massa aliquet in. Nam porttitor in urna ac tristique.</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size="28"/>
                    </button>

                </li>
            </ul>
        </div>
    );
}
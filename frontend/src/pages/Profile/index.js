import React from 'react';
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiLogOut size={24} color="#e02041"></FiLogOut>
                </button>
            </header>
        </div>
    );
}
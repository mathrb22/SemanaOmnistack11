import React, { useState, useEffect } from 'react';
import { FiLogOut, FiTrash2 } from 'react-icons/fi'
import { Link , useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Profile(){

    const history = useHistory();
    
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    //Para que a página carregue a lista de todos os casos assim que o usuário acessar, utilizar a função useEffect do react:
    //que serve para disparar alguma função em um determinado momento do componente
    useEffect( ( ) => {
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId] ); //recebe 2 parâmetros: 1º: qual função que será executada, 2º: QUANDO essa função será executada (array de dependências)
    //Assim que as informações do array mudar, a função será executada;

    async function handleDeleteIncident(id) {
        try{
            if (window.confirm("Tem certeza que deseja deletar o caso?")) {
                await api.delete(`incidents/${id}`, {
                    headers: {
                        Authorization: ongId,
                    }
                });
                setIncidents(incidents.filter(incident => incident.id !== id)) //selecionando os incidents que eu já tenho e filtrar
                //Para cada um dos incidents, manter apenas os incidents em que seu id seja diferente do id que foi deletado;
            } 
            else {
                
            }
        } catch(err){
            alert('Erro ao deletar caso, tente novamente.');
        }
    }
    //Para que após deletar um caso, ele seja excluído da interface, existem duas formas:
    //1- recarregar os dados da api (lista completa atualizada);
    //2- realizar uma varredura no array de incidents, buscar aquele com o id deletado, e remover o elemento da página 

    //No React, quando realizar uma repetição, neste caso o map(), o primeiro elemento a ser carregado deve possuir uma propriedade KEY, para que seja identificado 
    
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName} </span>

                <Link className="button" to="/incidents/new"> Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button" title="Fazer Logout">
                    <FiLogOut size={24} color="#e02041"></FiLogOut>
                </button>
            </header>

            {incidents.length > 0 ? <h1>Casos cadastrados:</h1> : null }
        
            <ul>
                {incidents.length > 0 ? ( incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(incident.value)}
                        </p>

                        <button
                        onClick={() => handleDeleteIncident(incident.id)}
                        type="button"
                        title="Deletar caso"
                        >
                        <FiTrash2 size={20} />
                        </button>
                    </li>
                    ))) : ( <h1>Nenhum caso cadastrado</h1> )
                }
            </ul>
        </div>
    );
}
//formatação do valor monetário em JavaScript:
//classe global Intl (internacionalização)
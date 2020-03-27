import React ,{ useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
export default function NewIncident(){

    const history = useHistory();

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try{

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');

        } catch (err){
            alert('Erro ao cadastrar novo caso.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={22} color="#E02041" /> 
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident} >
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        required
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        required
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        required
                        onChange={e => setValue(e.target.value)}
                    />

                    <div className="button-group">
                        <Link to="/profile" className="goback" >
                            <button 
                                className="CancelButton"
                                type="submit" > Cancelar
                            </button>
                        </Link>
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
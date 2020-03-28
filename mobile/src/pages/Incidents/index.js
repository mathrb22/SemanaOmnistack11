import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
//Para Listas de items no React Native em que precisam de um scroll, utilizar ao invés de uma View, uma FlatList
//Componente button já vem com estilização padrão do sistema operacional;
//TouchableOpacity: torna qualquer coisa clicável e ao clicar sua opacidade será reduzida;
//useEffect -> para carregar uma informação assim que o componente é exibido em tela
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
export default function Incidents(){

    const navigation = useNavigation();
    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    };

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0); //valor de início
    const [page, setPage] = useState(1); //valor de início
    const [loading, setLoading] = useState(false); //para armazenar uma informação quando estiver buscando dados novos, para evitar que estes dados sejam buscados novamente

    async function loadIncidents(){

        if (loading) {
            return;
        }

        if (total > 0 && incidents.length == total) { //se todas as informações estiverem carregadas, não irá buscar mais nada;
            return;
        }

        setLoading (true); 

        const response = await api.get('/incidents', {
            params: { page }
        });
        //copiando todos os valores já existentes no estado incidents, e copiando todos os valores de response.data
        setIncidents([... incidents, ... response.data]); //anexando 2 arrays dentro de um único array
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading (false);

    };

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
        
            <FlatList 
                style={styles.incidentList} 
                data={incidents}
                keyExtractor={incident => String(incident.id)} //função irá receber cada um dos incidents e retornará as informações únicas do array de DATA[];
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} //ao final da lista
                onEndReachedThreshold={0.2} //quantos % do final da lista o usuário deve estar situado no scroll para que carregue novos items
                renderItem={({ item: incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(incident.value)}
                        </Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)} //retornando parâmetro, usando arrow function
                        >
                            <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                            <Feather name="arrow-right" size={32} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )} //função que será responsável por renderizar cada item da lista; Essa função retornará um JSX, por isso utiliza-se ()
            />

            {/* </ScrollView> */}

        </View>
    );
}
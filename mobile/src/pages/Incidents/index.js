import React from 'react';
import {} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
//Para Listas de items no React Native em que precisam de um scroll, utilizar ao invés de uma View, uma FlatList
//Componente button já vem com estilização padrão do sistema operacional;
//TouchableOpacity: torna qualquer coisa clicável e ao clicar sua opacidade será reduzida;
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import styles from './styles';
export default function Incidents(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                style={styles.incidentList} 
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={incident => String(incident)} //função irá receber cada um dos incidents e retornará as informações únicas do array de DATA[];
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onpress={() => {}}
                    >
                        <Text style={styles.detailsButtonText}> Ver mais detalhes </Text>
                        <Feather name="arrow-right" size={24} color="#E02041"/>
                    </TouchableOpacity>
                </View>
                )} //função que será responsável por renderizar cada item da lista; Essa função retornará um JSX, por isso utiliza-se ()
            />
        </View>
    );
}
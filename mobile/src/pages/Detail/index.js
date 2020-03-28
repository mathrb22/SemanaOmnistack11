import React from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import whatsapp from '../../assets/WhatsApp_Logo_8.png'
import styles from './styles';


export default function Detail(){

    const route = useRoute();
    const navigation = useNavigation();
    const incident = route.params.incident;
    const message = `Olá, ${incident.name}! Estou entrando em contato pois gostaria de ajudar no caso "${incident.title}", com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}.`;
    function navigateBack(){
        navigation.navigate('Incidents');
    };

    //Função para envio de E-mail pelo aplicativo:
    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    };
    //Função para contato por WhatsApp:
    //Para abrir aplicações externas em um dispositivo móvel, utiliza-se uma tecnologia chamada "Deep-Linking" que está presente dentro do React Native também  
    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={45} color="#E02041"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} ({incident.city} - {incident.uf})</Text>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(incident.value)}
                    </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.contactText}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.action, { backgroundColor: '#25D366'}]} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}
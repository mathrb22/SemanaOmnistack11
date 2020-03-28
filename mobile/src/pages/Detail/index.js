import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import whatsapp from '../../assets/WhatsApp_Logo_8.png'
import styles from './styles';


export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá, APAD! Estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada", com o valor de R$120,00.';
    function navigateBack(){
        navigation.navigate('Incidents');
    };

    //Função para envio de E-mail pelo aplicativo:
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['diego@rocketseat.com.br'],
            body: message,
        })
    };
    //Função para contato por WhatsApp:
    //Para abrir aplicações externas em um dispositivo móvel, utiliza-se uma tecnologia chamada "Deep-Linking" que está presente dentro do React Native também  
    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=5514997080544&text=${message}`);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={45} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
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
        </View>
    );
}
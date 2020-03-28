import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, //semelhante a padding: 0 24; (CSS)
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row', //ao contrário do web, o padrão é ROW
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 18,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 16,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row', //para ficar tudo na mesma linha
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    detailsButtonText: {
        fontSize: 16,
        color: '#e02041',
        fontWeight: 'bold',
        
    }

});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
//NavigationContainer: é essencial que esteja por cima de todas as rotas do app

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const AppStack = createStackNavigator(); //primeira navegação criada
// <AppStack.Screen />  -> para cada uma das rotas da aplicação
// <AppStack.Screen />  -> recebe a propriedade component (cada uma das páginas cridas em ./pages)

//Por padrão, o StackNavigator possui um cabeçalho (header). Para desabilitá-lo, adicionar a propriedade screenOptions={{headerShown: false}}

export default function Routes(){
    return (
        <NavigationContainer> 
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} /> 
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
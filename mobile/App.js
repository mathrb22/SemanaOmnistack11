import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//O React Native não possui as mesmas tags do HTML;
//Tag <View></View> pode ser utilizada no lugar de uma <div>, <header>, <footer>, <aside>, etc
//No React Native não existe a semântica do HTML;
//Todos os elementos do React Native, possuem DISPLAY: "FLEX" por padrão. Não existe display block, inline-block, etc
//Todos os valores que não são números devem ser escritos entre aspas simples ''
export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.header1}>Hello OmniStack!</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //para ocupar todo o espaço da tela;
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header1: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
    fontStyle: 'normal',

  },

});


import React from 'react';
import Header from '../../components/header';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import MonthSummary from '../../components/monthSummary';
import GroupCard from '../../components/groupCard';
import ExpenseList from '../../components/expenseList';
import { colors } from '../../components/styles';

const { violet600, violet900  } = colors;
const home = () => {

  return(
    <ImageBackground 
    source={require('../../assets/images/bg.png')}  // Caminho da imagem de fundo
    style={styles.backgroundImage}  // Estilo da imagem de fundo
  >
    <ScrollView style={styles.container}>
      <Header />

      {/* Saídas do Mês */}
      <MonthSummary />

      {/* Grupos */}
      <Text style={styles.sectionTitle}>Grupos</Text>
      <GroupCard /> 

      <Text style={styles.sectionTitle}>Gastos Recentes</Text>
      <ExpenseList /> 

    </ScrollView>
    </ImageBackground>

  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',  // Ajusta a imagem para cobrir todo o espaço disponível
  },
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 15,

  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: violet900,
    fontFamily: 'Lato-Light',
    marginBottom: 10,
  },

});



export default home;

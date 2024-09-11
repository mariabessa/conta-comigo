
import React from 'react';
import Header from '../../components/header';
import { ScrollView, StyleSheet, Text } from 'react-native';
import MonthSummary from '../../components/monthSummary';
import GroupCard from '../../components/groupCard';
import ExpenseList from '../../components/expenseList';

const home = () => {

  return(
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

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});



export default home;

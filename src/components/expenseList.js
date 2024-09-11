import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors } from './styles';

const { pink, violet900, violet300  } = colors;

// Componente para a lista de despesas recentes
const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
      // Dados mocados de despesas recentes
      const mockedExpenses = [
        { id: 1, name: 'Hamburgueria NoPonto', amount: '- R$ 20,00', category: 'Janta', date: '18/08/2024' },
        { id: 2, name: 'Capina do lote da casa', amount: '- R$ 15,00', category: 'Capinudos', date: '17/08/2024' },
        { id: 3, name: 'Supermercado', amount: '- R$ 200,00', category: 'Compras', date: '16/08/2024' },
      ];
      setExpenses(mockedExpenses);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {expenses.map((expense) => (
        <TouchableOpacity key={expense.id} style={styles.expenseItem}>
        <View style={styles.row}>
            <Text style={styles.expenseName}>{expense.name}</Text>
            <Image source={require('../assets/images/arrow.png')} style={styles.icon} />

        </View>
        <Text style={styles.expenseAmount}>{expense.amount}</Text>
        
          <View style={styles.row}>
            <Text style={styles.expenseCategory}>{expense.category}</Text>
            <Text style={styles.expenseDate}>{expense.date}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
    marginHorizontal: 10,
    marginRight: 20,
  },
  expenseItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: violet900,
  },
  expenseAmount: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: pink,
    marginTop: 10,
    paddingBottom: 36,
  },
  expenseCategory: {
    fontSize: 14,
    color: violet300,
  },
  expenseDate: {
    fontSize: 14,
    color: violet300,
  },
});

export default ExpenseList;

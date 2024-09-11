import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'; // Se você não estiver usando axios, substitua pelo método de requisição adequado
import { colors } from './styles';

const { pink, violet300, violet900, white  } = colors;

const MonthSummary = () => {
  const [summary, setSummary] = useState({
    total: 0,
    lastUpdate: '',
  });

  useEffect(() => {
    //mocando os dados
    const mockedData = {
        total: 1259.00,
        lastUpdate: '18 de agosto',
      };

    // const fetchSummary = async () => {
    //   try {
    //     const response = await axios.get('https://api.example.com/month-summary'); // Substitua pela sua URL de API
    //     setSummary(response.data);
    //   } catch (error) {
    //     console.error('Erro ao buscar os dados do resumo do mês:', error);
    //   }
    // };

    // fetchSummary();
  }, []);

  return (
    <TouchableOpacity style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.title}>Saídas do mês</Text>
        <Image source={require('../assets/images/Vector.png')} style={styles.icon} />
      </View>
      <Text style={styles.value}>R$ {summary.total.toFixed(2)}</Text>
      <Text style={styles.subText}>Última atualização {summary.lastUpdate}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: violet900,
    fontFamily: 'Poppins-Medium',
    marginBottom: 32,
  },
  icon: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: pink,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    marginBottom: 4,
  },
  subText: {
    fontSize: 12,
    fontFamily: 'Lato-Light',
    color: violet300,
  },
});

export default MonthSummary;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios'; // Se você não estiver usando axios, substitua pelo método de requisição adequado
import { colors } from './styles';

const { pink, violet900, white  } = colors;

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
    <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.title}>Saídas do mês</Text>
        <Image source={require('../assets/images/Vector.png')} style={styles.icon} />
      </View>
      <Text style={styles.value}>R$ {summary.total.toFixed(2)}</Text>
      <Text style={styles.subText}>Última atualização {summary.lastUpdate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: white,
    borderRadius: 10,
    padding: 20,
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
  },
  icon: {
    width: 24, // Defina o tamanho da imagem
    height: 24, // Defina o tamanho da imagem
    resizeMode: 'contain',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: pink,
    marginTop: 10,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default MonthSummary;

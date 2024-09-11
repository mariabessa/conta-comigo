import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios'; // Vamos usar axios para fazer a requisição, você pode instalar com: npm install axios

const GroupCard = () => {
  const [groups, setGroups] = useState([]);

  // Fazendo a requisição
  useEffect(() => {
    const fetchGroups = async () => {
      const mockedGroups = [
        { id: 1, name: 'Capinudos', description: 'Grupo de capina para os amigos' },
        { id: 2, name: 'Jogo do bixo', description: 'Jogue e seja muito feliz' },
        { id: 3, name: 'Janta', description: 'Grupo de janta' },
      ];
      setGroups(mockedGroups);
      // try {
      //   const response = await axios.get('https://api.example.com/groups'); // Substitua pelo seu endpoint de grupos
      //   setGroups(response.data);
      // } catch (error) {
      //   console.error('Erro ao buscar os grupos:', error);
      // }
    };

    fetchGroups();
  }, []); // Executa a requisição apenas uma vez ao montar o componente

  return (
    <ScrollView horizontal style={styles.container}>
      {groups.map((group) => (
        <View key={group.id} style={styles.groupCard}>
          <Text style={styles.groupTitle}>{group.name}</Text>
          <Text style={styles.groupDescription}>{group.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  groupCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: 150,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 5,
  },
  groupDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default GroupCard;


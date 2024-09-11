import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'; 
import { colors } from './styles';

const { pink, violet300, violet900, white  } = colors;

const GroupCard = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const mockedGroups = [
        { id: 1, name: 'Capinudos', description: 'Grupo de capina para os amigos' },
        { id: 2, name: 'Jogo do bixo', description: 'Jogue e seja muito feliz' },
        { id: 3, name: 'Janta', description: 'Grupo de janta' },
      ];
      setGroups(mockedGroups);
      // try {
      //   const response = await axios.get(''); 
      //   setGroups(response.data);
      // } catch (error) {
      //   console.error('Erro ao buscar os grupos:', error);
      // }
    };

    fetchGroups();
  }, []); 

  return (
    <ScrollView horizontal style={styles.container}>
      {groups.map((group) => (
        <TouchableOpacity key={group.id} style={styles.groupCard}>
          <View style={styles.titleContainer}>
            <Text style={styles.groupTitle}>{group.name}</Text>
            <Image source={require('../assets/images/arrow.png')} style={styles.icon} />
          </View>
          <Text style={styles.groupDescription}>{group.description}</Text>
        </TouchableOpacity>
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: violet900,
    marginBottom: 5,
    marginRight: 15,

  },
  groupDescription: {
    fontSize: 14,
    paddingTop: 28,
    color: violet300,
  },
});

export default GroupCard;


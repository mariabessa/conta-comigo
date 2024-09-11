import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import perfilImage from './../assets/images/perfil.png';
import { colors } from './styles';

const { offWhite } = colors;
const Header = () => {

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12 ) {
      return 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  }; 

  return (
    <View style={styles.header}>
      <Image 
        source={perfilImage} 
        style={styles.avatar} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{getGreeting()},</Text>
        <Text style={styles.name}>nome da pessoa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    color: offWhite,
    fontFamily: 'Lato-Light'
  },
  name: {
    fontSize: 18,
    color: offWhite,
    fontFamily: 'Lato-Bold'
  },
});

export default Header;

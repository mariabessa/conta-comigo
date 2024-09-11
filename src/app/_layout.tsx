import { Slot, useRouter } from "expo-router";
import {View, Text, ActivityIndicator} from 'react-native';
import React, { useContext, useState } from 'react';
import { useFonts } from 'expo-font';



export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const router = useRouter();
  
  

  return (

      <View style={styles.container}>
        <Slot/>
      </View>

  );
} 

const styles = {
  container: {
  flex: 1,  
  },
};
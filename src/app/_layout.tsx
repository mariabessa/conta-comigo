import { Slot, useRouter } from "expo-router";
import {View, Text, ActivityIndicator} from 'react-native';
import React, { useContext, useState } from 'react';



export default function RootLayout() {
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
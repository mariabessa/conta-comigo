import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/src/components/styles";
import { Image } from "react-native";



const TabLayout = () => {


  return (

    <Tabs

      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        headerTintColor: colors.white,
        tabBarActiveTintColor: colors.violet600,
        tabBarInactiveTintColor: colors.violet900,
        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
          paddingTop: 10,
          backgroundColor: colors.white
        },
        tabBarLabelStyle: {
          fontSize: 19,
          fontWeight: 'bold'
        },
        tabBarIconStyle: {
          width: 85,
          height: 85,
        },
      }}
    >


      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/images/home_on.png') : require('../../assets/images/home_off.png')}
              style={{ width: 80, height: 80 }}  
              resizeMode="contain" 
            />          
          ),
        }}
      />

      <Tabs.Screen
        name="cadastrar"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/images/cadastrar_on.png') : require('../../assets/images/cadastrar_off.png')}
              style={{ width: 85, height: 85 }}  
              resizeMode="contain" 
            /> 
          ),
        }}
      />

      <Tabs.Screen
        name="resumo"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={focused ? require('../../assets/images/resumo_on.png') : require('../../assets/images/resumo_off.png')}
              style={{ width: 80, height: 80 }}  
              resizeMode="contain" 
            /> 
          ),
        }}
      />
    </Tabs>

  )
}


export default TabLayout;

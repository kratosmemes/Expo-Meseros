import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

//Tab components
import EventosClienteComponent from '../../components/Cliente/Eventos';
import ProfileComponent from '../../components/index';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
      return (

          <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: "#4AA7C0",
            tabBarInactiveTintColor: "grey",
            headerShown: false
          })}>
            <Tab.Screen name="Eventos" component={EventosClienteComponent}/>
            <Tab.Screen name="Perfil" component={ProfileComponent}/>
          </Tab.Navigator>
   
      );
}

export default HomeScreen;
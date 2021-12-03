import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

//Tab components
import EventosMesero from '../../components/Mesero/Eventos';
import ProfileComponent from '../../components/';

const Tab = createBottomTabNavigator();

const HomeScreen = ({route}) => {
  const usuario = route.params;
  console.log(usuario);
      return (

          <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: "#4AA7C0",
            tabBarInactiveTintColor: "grey",
            headerShown: false
          })}>
            <Tab.Screen name="Eventos" component={EventosMesero}/>
            <Tab.Screen name="Perfil" component={ProfileComponent}/>
          </Tab.Navigator>
   
      );
}

export default HomeScreen;
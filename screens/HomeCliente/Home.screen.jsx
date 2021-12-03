import React, {useState , useEffect} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import {StyleSheet} from 'react-native';

//Firebase
import {db , auth} from '../../firebase';
import { doc, getDoc , query , collection , where , getDocs} from "firebase/firestore";

//Tab components
import EventosClienteComponent from '../../components/Cliente/Eventos';
import ProfileComponent from '../../components/index';
import CrearEventoComponent from '../../components/Cliente/CrearEvento';
const Tab = createBottomTabNavigator();

const HomeScreen = ({route}) => {
  const {userEmail} = route.params;
  console.log(route)
      return (

          <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: "#4AA7C0",
            tabBarInactiveTintColor: "grey",
            headerShown: false
          })}>
            <Tab.Screen name="Perfil"  component={ProfileComponent}/>
            <Tab.Screen name="CrearEvento" component={CrearEventoComponent}/>
            <Tab.Screen name="Eventos" component={EventosClienteComponent}/>

          </Tab.Navigator>
      );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  } 
});


export default HomeScreen;
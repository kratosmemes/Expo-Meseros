import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';


//Navigator import
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//Screens import
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeCliente from './screens/HomeCliente';
import HomeMesero from './screens/HomeMesero';

//Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}}>
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{headerShown: false}}>
          {(props)=> <RegisterScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="HomeCliente" options={{headerShown: false}}>
          {(props)=><HomeCliente {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="HomeMesero" options={{headerShown: false}}>
          {(props)=><HomeMesero {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


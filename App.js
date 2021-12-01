import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

//Navigator import
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//Screens import
import LoginScreen from './screens/Login/index';
import RegisterScreen from './screens/Register/index';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

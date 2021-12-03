import React from 'react';
import {View , Text, TouchableOpacity} from 'react-native';

//Firebase
import {auth , db} from '../../../firebase';
import { doc, getDoc , query , collection , where , getDocs} from "firebase/firestore";

import { useNavigation } from '@react-navigation/core';



const EventosComponent = () => {

    //Navigation
    const navigation = useNavigation();
    
    const handleSignOut = async() => {
      await auth
        .signOut()
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    return(
        <View>
            <Text>Estas en eventos-mesero</Text>
            <TouchableOpacity onPress={handleSignOut}>
            <Text>Cerras sesion</Text>
        </TouchableOpacity>
        </View>

    )
}

export default EventosComponent;
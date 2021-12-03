import React,{useState} from 'react';
import {View , Text, TextInput , StyleSheet} from 'react-native'; 

import { useNavigation } from '@react-navigation/core';



/*------Styled components----*/
//Views
import {ContainerView , ContentView , FormView} from '../../../styledComponents/Views';
//TextInputs
import {FormInput} from '../../../styledComponents/Inputs';
//Buttons
import { LoginRegisterButton , CreateAcountRef } from '../../../styledComponents/Buttons';
//Texts
import {LoginRegisterText, LogInText , CrearEventoTitle} from '../../../styledComponents/Texts';

//Firebase
import {db} from '../../../firebase';
import { collection , addDoc} from '@firebase/firestore';

const CrearEventoComponent = () => {
    const [nombre, SetNombre] = useState("");
    const [direccion, SetDireccion] = useState("");
    const [hora , SetHora] = useState("");
    const [fecha , SetFecha] = useState("");

    const navigation = useNavigation();

    const crearEvento = async() => {
        try{
            const docRef = await addDoc(collection(db , 'eventos') , {
                nombre_evento: nombre,
                direccion_evento: direccion,
                hora_evento: hora,
                fecha_evento: fecha,
            },alert("Se creo") , SetNombre((current)=> current = "") , SetDireccion((current)=> current = "") , SetHora((current)=> current = "") , SetFecha((current)=> current = ""))
        }catch(err){
            alert("No se creó" , err.message)
        }
    }
    

  
    const rightButtonConfig = {
        title: 'Log-out',
        handler: () => navigation.navigate("Login"),
      };
      

    return(        
        <ContainerView>
        <ContentView>
            <FormView>
                <View>
                    <CrearEventoTitle>Crear Evento</CrearEventoTitle>
                </View>
                <FormInput
                placeholder="Nombre del evento"
                value={nombre}
                onChangeText={(text) => SetNombre(text)}
                />
                <FormInput
                placeholder="Direccion del evento"
                value={direccion}
                onChangeText={(text) => SetDireccion(text)}
                />           
                <FormInput
                placeholder="Hora del evento"
                value={hora}
                onChangeText={(text) => SetHora(text)}
                />
                <FormInput
                placeholder="Fecha del evento"
                value={fecha}
                onChangeText={(text) => SetFecha(text)}
                />
                <LoginRegisterButton onPress={crearEvento}>
                    <LoginRegisterText >Crear</LoginRegisterText>
                </LoginRegisterButton>
            </FormView>
        </ContentView>
        </ContainerView>
    )
}


  
export default CrearEventoComponent;
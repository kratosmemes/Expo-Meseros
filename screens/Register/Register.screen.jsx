import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import React from 'react';

import { useNavigation } from "@react-navigation/core"
/*------Styled components----*/
//Views
import {ContainerView , ContentView , FormView} from '../../styledComponents/Views';
//TextInputs
import {FormInput} from '../../styledComponents/Inputs';
//Buttons
import { LogInButton , CreateAcountRef } from '../../styledComponents/Buttons';
//Texts
import {LogInText} from '../../styledComponents/Texts';
 
const RegisterScreen = () => {

    const navigation = useNavigation();

    const LoginNavigation = () =>{
        navigation.replace("Login");
    };
    return(
        <ContainerView>
            <ContentView>
                <FormView>
                    <Text>Registro</Text>
                    <FormInput placeholder="Correo electronico"></FormInput>
                    <FormInput placeholder="Contraseña"></FormInput>
                    <LogInButton>
                        <LogInText>Ingresar</LogInText>
                    </LogInButton>
                    <TouchableOpacity onPress={LoginNavigation} style={styles.izq}>
                        <Text>Iniciar sesión</Text>
                    </TouchableOpacity>
                </FormView>
            </ContentView>
        </ContainerView>
    )
    
}
const styles = StyleSheet.create({
    izq: {
        left: -170,
        marginTop: 15
    }
});

export default RegisterScreen;
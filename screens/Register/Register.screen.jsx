import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import React , {useState} from 'react';

import { useNavigation } from "@react-navigation/core"
/*------Styled components----*/
//Views
import {ContainerView , ContentView , FormView} from '../../styledComponents/Views';
//TextInputs
import {FormInput} from '../../styledComponents/Inputs';
//Buttons
import { LoginRegisterButton , CreateAcountRef } from '../../styledComponents/Buttons';
//Texts
import {LoginRegisterText, LogInText} from '../../styledComponents/Texts';

//Firebase
import {auth} from '../../firebase';

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
  
          
    const navigation = useNavigation();

    //Funcion registro
    const handleSignup = () => {
        auth
          .createUserWithEmailAndPassword(email, pwd)
          .then((userCredentials) => {
            // then is a fullfilled promise
            const user = userCredentials.user;
            console.log(user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            // catch is a rejected promise
            alert(error.message);
          });
};


    const LoginNavigation = () =>{
        navigation.replace("Login");
    };
    return(
        <ContainerView>
            <ContentView>
                <FormView>
                    <Text>Registro</Text>
                    <FormInput 
                    placeholder="Correo electronico"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                    <FormInput
                    placeholder="Contraseña"
                    value={pwd}
                    onChangeText={(text) => setPwd(text)}
                    />
                    <LoginRegisterButton onPress={handleSignup}>
                        <LoginRegisterText>Registrarse</LoginRegisterText>
                    </LoginRegisterButton>
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
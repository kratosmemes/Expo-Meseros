import React, {useState , useEffect} from 'react';
import { View , TextInput, TouchableOpacity , StyleSheet, Text } from 'react-native';

import { useNavigation } from "@react-navigation/core"
/*------Styled components----*/
//Views
import {ContainerView , ContentView , FormView} from '../../styledComponents/Views';
//TextInputs
import {FormInput} from '../../styledComponents/Inputs';
//Buttons
import { LoginRegisterButton , CreateAcountRef } from '../../styledComponents/Buttons';
//Texts
import {LoginRegisterText} from '../../styledComponents/Texts';

//I18n
import i18n from '../../Localization/i18n';

//Firebase
import {auth} from '../../firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    
    //Navigation
    const navigation = useNavigation();

    //Verifica si hay usuario valido y si lo hay lo manda a home
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged((user) => {
            if(user){
                navigation.navigate('Login');
            }
        })
        return unsuscribe;
    }, [])
    
    const handleLogin = async() => {
        await auth
          .signInWithEmailAndPassword(email, pwd)
          .then((userCredentials) => {
            // then is a fullfilled promise
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
            navigation.navigate('Home');
          })
          .catch((error) => {
            // catch is a rejected promise
            alert(error.message);
          });
      };
    
    const RegisterNavigation = () =>{
        navigation.replace("Register");
    };
    return(
        <ContainerView>
            <ContentView>
                <FormView>
                    <Text>Login</Text>
                    <FormInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <FormInput placeholder="Contraseña"
                        placeholder="Password"
                        value={pwd}
                        onChangeText={(text) => setPwd(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <LoginRegisterButton>
                        <LoginRegisterText onPress={handleLogin}>Ingresar</LoginRegisterText>
                    </LoginRegisterButton>
                    <TouchableOpacity style={styles.izq} onPress={RegisterNavigation}>
                        <Text>Crear cuenta</Text>
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


export default LoginScreen;
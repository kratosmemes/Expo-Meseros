import React, {useState , useEffect} from 'react';
import { View , TextInput, TouchableOpacity , StyleSheet, Text } from 'react-native';

import { useNavigation } from "@react-navigation/core"
/*------Styled components----*/
//Views
import {ContainerView , ContentLoginView , FormView} from '../../styledComponents/Views';
//TextInputs
import {FormInput} from '../../styledComponents/Inputs';
//Buttons
import { LoginRegisterButton , CreateAcountRef } from '../../styledComponents/Buttons';
//Texts
import {LoginRegisterText , AuthTitle} from '../../styledComponents/Texts';

//I18n
import i18n from '../../Localization/i18n';


//Firebase
import {auth , db} from '../../firebase';
import { doc, getDoc , query , collection , where , getDocs} from "firebase/firestore";


const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    
    //Navigation
    const navigation = useNavigation();

    
 
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(async(user) => {
            if(user == null | user == undefined){
                return unsuscribe
            }
            const q = query(collection(db, "usuario"), where("correo", "==", user.email));
            let TipoUsuario;
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            TipoUsuario = doc.data().tipo;
            });
            {TipoUsuario == "cliente"? navigation.navigate('HomeCliente' , {userEmail: user.email}) : navigation.navigate('HomeMesero' ,  {userEmail: user.email}) };
        });
        return unsuscribe;
      }, []);
    
    const handleLogin = async() => {

 
        await auth
          .signInWithEmailAndPassword(email, pwd)
          .then(async(userCredentials) => {
            const q = query(collection(db, "usuario"), where("correo", "==", userCredentials.user.email));
            let TipoUsuario;
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            TipoUsuario = doc.data().tipo;
            });
            {TipoUsuario == "cliente"? navigation.navigate('HomeCliente' , {userEmail: user.email}) : navigation.navigate('HomeMesero' ,  {userEmail: user.email}) };
            // navigation.navigate('HomeCliente' , {usuario:user.uid});
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
            <ContentLoginView>
                <FormView>
                    <AuthTitle styles={styles.abajo}>Login</AuthTitle>
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
                        <Text style={styles.crearCuenta}>Crear cuenta</Text>
                    </TouchableOpacity>
                </FormView>
            </ContentLoginView>
        </ContainerView>
    )
    
}
const styles = StyleSheet.create({
    crearCuenta: {
        marginTop: 10,
    }
});


export default LoginScreen;
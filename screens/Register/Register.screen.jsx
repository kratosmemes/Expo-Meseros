import { View , Text , StyleSheet , TouchableOpacity , Picker} from 'react-native';
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
import {auth , db} from '../../firebase';
import { collection , addDoc} from '@firebase/firestore';

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");

          
    const navigation = useNavigation();

    //Funcion registro
    const handleSignup = async() => {
        await auth
          .createUserWithEmailAndPassword(email, pwd)
          .then(async(userCredentials) => {
            // then is a fullfilled promise
            const user = userCredentials.user;
            console.log(user.uid);
            try{
                const docRef = await addDoc(collection(db , 'usuario'), {
                    "correo": email,
                    "contrasena": pwd,
                    "nombre": nombre,
                    "tipo": tipo,
                });
            }catch(e){
                    alert(e.message);
            };
        },navigation.navigate("Login"))
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
                    <FormInput
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={(text) => setNombre(text)}
                    />
                    <Picker
                        selectedValue={tipo}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                    >
                        <Picker.Item label="Mesero" value="mesero" />
                        <Picker.Item label="Cliente" value="cliente" />
                    </Picker>
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
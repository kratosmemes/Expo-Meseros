import React, {useState} from 'react';
import {View , Text, TouchableOpacity , Image , StyleSheet , Alert, Modal ,  Pressable, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//Firebase
import {db} from '../firebase';
import { doc, updateDoc } from "firebase/firestore";


const ProfileComponent = ({route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombre , setNombre] = useState("");

  console.log(route)

    return(        
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput placeholder="Nombre"
              value={nombre}
              onChangeText={(text) => setNombre(text)}
              />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View>
          <View style={styles.center}>
            <Image
            style={styles.tinyLogo}
            source={'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png'}
            />
          </View>
          <View style={styles.center}>
            <Text style={styles.inputs} value="qwe">angelpadillasanchez@hotmail.com </Text>
            <Text style={styles.inputs}value="qwe">Angel Padilla Sanchez</Text>
            <Text style={styles.inputs}>Mesero</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
            <Text style={styles.textStyle}>Modificar perfil</Text>
            </Pressable>

          </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageContainer: {

  },
  inputs: {
    marginTop: 10,
    width:"auto",
    height:40,
    fontSize: 20,
    textAlign: "center",
  },
  center:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
  
});
export default ProfileComponent;
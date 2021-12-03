import React, {useState , useEffect} from 'react';
import {View , Text, TouchableOpacity , StyleSheet , Image , ScrollView , StatusBar} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Navigation
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/core';

//Firebase
import {auth} from '../../../firebase';

const EventosComponent = () => {


    const rightButtonConfig = {
      title: 'Sign-Out',
      handler: () => {
        auth
        .signOut()
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          alert(error.message);
        });
      }
    };


    return( 
      <SafeAreaView style={styles.container}>
      {/* <NavigationBar
      style={styles.bajarNav}
      rightButton={rightButtonConfig}
    /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.mover}>
          <Card>
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          <Card>
                      <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 42,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  mover:{
    marginTop: 10,
  }
});

export default EventosComponent;
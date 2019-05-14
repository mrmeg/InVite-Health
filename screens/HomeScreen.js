import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'InVite Health',
      // headerLeft: () => {
      //   return (
      //     <Image 
      //       source={require('../assets/images/InVite-Health-round-logo.png')} 
      //       style={{width: 45, height: 45,}}
      //     />
      //   )
      // },
      headerStyle: {
        backgroundColor: '#f34d25',
        // backgroundColor: '#444444'
      },
      headerTintColor: '#fff',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Home screen content — Current promotions, store links, sign up/sign in.</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

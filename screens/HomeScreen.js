import React, { Component } from 'react';
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

import { Icon } from 'expo';

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //     title: 'InVite Health',
  //     headerLeft: () => {
  //       return (
  //         <Icon.Ionicons 
  //           name={
  //             Platform.OS === 'ios'
  //               ? 'ios-list'
  //               : 'md-list'
  //           }
  //           size={36}
  //           style={{paddingLeft: 12}}
  //           color='black'
  //           onPress={() => {console.warn('pressed')}}
  //         />
  //       )
  //     },
  //     headerStyle: {
  //       backgroundColor: '#FD4F00',
  //       // backgroundColor: '#444444'
  //     },
  //     headerTintColor: '#fff',
  // }

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

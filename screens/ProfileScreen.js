import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#f34d25',
      },
      headerTintColor: '#fff',
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
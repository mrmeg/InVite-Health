import React, { Component } from 'react';
import { Text, View, Header } from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class DrawerContent extends Component {


  render() {
    return (
      <View>
        <Text>Header Content</Text>
        <DrawerItems {...props} />
      </View>
    )
  }
}

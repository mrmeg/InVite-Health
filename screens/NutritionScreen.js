import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Nutrition',
      headerStyle: {
        backgroundColor: '#f34d25',
      },
      headerTintColor: '#fff',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Nutrition Consultation Form, appointment scheduling, and possibly live consulting will go in this stack.</Text>
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

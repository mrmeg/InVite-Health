import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class RadioScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Radio',
      headerStyle: {
        backgroundColor: '#f34d25',
      },
      headerTintColor: '#fff',
    };
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}

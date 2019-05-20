import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import AppContainer from './navigation/DrawerNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* <AppNavigator /> */}
          <AppContainer />
          {/* <Home /> */}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
      ]),
      Font.loadAsync({
          'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
          'Roboto-Thin': require('./assets/fonts/Roboto/Roboto-Thin.ttf'),
          'Roboto-Light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
          'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

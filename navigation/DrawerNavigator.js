import React from 'react';
import { Platform, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { 
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView, } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import HomeScreen  from '../screens/HomeScreen';
import NutritionScreen from '../screens/NutritionScreen';
import RadioScreen from '../screens/RadioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'expo';

const DrawerComponent = props => (
  <ScrollView style={{backgroundColor: 'black'}}>
    <SafeAreaView style={{flex: 1}}>
      <View style={{
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Image 
          source={require('../assets/images/InVite-Health-round-logo.png')}
        />
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  headerMode: 'none'
});

const NutritionStack = createStackNavigator({
  Nutrition: NutritionScreen,
}, {
  headerMode: 'none'
});

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStack },
  Nutrition: { screen: NutritionStack },
  Radio: RadioScreen,
  Profile: { screen: ProfileScreen },
}, {
  contentComponent: (props) => ( 
    DrawerComponent(props)
  ),
  contentOptions: {
    activeBackgroundColor: '#FD4F00',
    inactiveBackgroundColor: 'black',
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  },
  navigationOptions: ({ navigation }) => ({
    initialRoute: HomeStack,
    title: 'InVite Health',
    headerStyle: {
      backgroundColor: '#FD4F00',
    },
    headerTintColor: '#fff',
    headerLeft: () => {
      return (
        <TouchableOpacity
        onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}} >
          <Icon.Ionicons 
            name={
              Platform.OS === 'ios'
                ? 'ios-list'
                : 'md-list'
            }
            size={40}
            style={{paddingLeft: 16}}
            color='black'
          />
        </TouchableOpacity>
      )
    },
  })
});

const RootStackNavigator = createStackNavigator({
  Home: DrawerNavigator,
});

export default AppContainer = createAppContainer(RootStackNavigator);
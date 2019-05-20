import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { 
  NavigationActions,
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer, } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import DrawerContent from '../screens/DrawerContent';
import  HomeScreen  from '../screens/HomeScreen';
import  NutritionScreen from '../screens/NutritionScreen';
import RadioScreen from '../screens/RadioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from 'expo';

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
  Home: {
    screen: HomeStack,
  },
  Nutrition: {
    screen: NutritionStack,
  },
  Profile: {
    screen: ProfileScreen
  }
}, {
  navigationOptions: ({ navigation }) => ({
    title: 'InVite Health',
    headerStyle: {
      backgroundColor: '#FD4F00',
    },
    headerTintColor: '#fff',
    headerLeft: () => {
      return (
        <TouchableOpacity>
          <Icon.Ionicons 
            name={
              Platform.OS === 'ios'
                ? 'ios-list'
                : 'md-list'
            }
            size={36}
            style={{paddingLeft: 12}}
            color='black'
            onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}
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
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NutritionScreen from '../screens/NutritionScreen';
import RadioScreen from '../screens/RadioScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  )};

const NutritionStack = createStackNavigator({
  Nutrition: NutritionScreen,
});

NutritionStack.navigationOptions = {
  tabBarLabel: 'Nutrition',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-nutrition' : 'md-nutrition'}
    />
  ),
};

const RadioStack = createStackNavigator({
  Radio: RadioScreen,
});

RadioStack.navigationOptions = {
  tabBarLabel: 'Radio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-radio' : 'md-radio'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};

const RouteConfigs = {
  HomeStack,
  NutritionStack,
  RadioStack,
  ProfileStack
}

const TabNavConfig = {
  tabBarOptions: {
    activeBackgroundColor: '#666666',
    activeTintColor: 'orange'
  }
}

const MainTabNavigator = createBottomTabNavigator(RouteConfigs, TabNavConfig);

export default MainTabNavigator
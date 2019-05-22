import React from 'react';
import { Platform, TouchableOpacity, ScrollView, View, Image, Text } from 'react-native';
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
import { Icon, LinearGradient } from 'expo';

const HeaderGradient = props => (
  <View style={{flex: 1}}>
    <LinearGradient
      colors={['#222', '#ccc']}
      style={{ padding: 15, alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 15,
          color: '#fff',
        }}>
        InViteHealth
      </Text>
    </LinearGradient>
  </View>
)

const DrawerComponent = props => (
  <ScrollView style={{backgroundColor: '#222222'}}>
    <SafeAreaView style={{flex: 1}}>
      <View style={{
          backgroundColor: '#222222',
          display: 'flex',
          alignItems: 'center'
        }}>
      <View style={{paddingTop: 5}}>
        <Image 
          source={require('../assets/images/InVite-Health-round-logo.png')}
        />
      </View>
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
    inactiveBackgroundColor: '#222222',
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  },
  navigationOptions: ({ navigation }) => ({
    initialRoute: HomeStack,
    title: 'InVite Health',
    headerTransparent: true,
    header: (props) => ( HeaderGradient(props) ),
    headerTintColor: 'black',
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
            color='#222222'
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
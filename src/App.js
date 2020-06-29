import React from 'react';
import { Root } from "native-base";
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from './screens/HomeScreen'
import DrawerScreen1 from './screens/DrawerScreen1'
import DrawerScreen2 from './screens/DrawerScreen2'
import DrawerScreen3 from './screens/DrawerScreen3'
import SideBar from "./sidebar";
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'


const Drawer = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    // DrawerScreen0 : {screen: Tabs}, //with the three tabs
    DrawerScreen1: { screen: DrawerScreen1 },
    DrawerScreen2: { screen: DrawerScreen2 },
    DrawerScreen3: { screen: DrawerScreen3 },
  },
  {
    initialRouteName: "DrawerScreen1", //TODO: CHANGE TO HomeScreen
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} /> //design of the sidebar, name of tabs
  }
);


const AppNavigator = createSwitchNavigator(
  {
    Drawer: { screen: Drawer },
    LoginScreen :{ screen: LoginScreen},
    SignUpScreen : {screen: SignUpScreen}
  },
  {
    initialRouteName: "Drawer", //TODO :change to signup screen
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;


/*export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
*/
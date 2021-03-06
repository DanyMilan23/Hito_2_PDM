import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../View/login/loginScreen2';
import RegisterScreen from '../View/register/register';
import AppScreen from '../View/APP/appScreen';
import SettingScreen from '../View/settings/settingScreen';
import Colors from '../config/colors';

const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login Screen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="App"
        component={AppScreen}
        options={{
          title: 'App Main',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25,
          },
        }}
      />
      <Drawer.Screen
        name="Settings"        
        component={SettingScreen}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

const mainNavigator = () => {
  const [isLogged, setIsLogged] = React.useState(null);
  return (
    <NavigationContainer>
      {isLogged !== null ? (<DrawerScreen/>): (<StackScreen/>)}
    </NavigationContainer>
  );
};

export default mainNavigator;

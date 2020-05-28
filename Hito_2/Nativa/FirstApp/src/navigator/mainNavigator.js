import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/login/loginScreen2';
import RegisterScreen from '../View/register/register';
import AppScreen from '../View/APP/appScreen'
import SettingScreen from '../View/settings/settingScreen'
import Colors from '../config/colors';

const Stack = createStackNavigator();

function mainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name='App'
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
              fontSize: 25
            },
          }}
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
    </NavigationContainer>
  );
}

export default mainNavigator;
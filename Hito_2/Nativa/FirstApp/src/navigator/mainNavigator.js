import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/login/loginScreen2';
import RegisterScreen from '../View/register/register';

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
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register Form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default mainNavigator;
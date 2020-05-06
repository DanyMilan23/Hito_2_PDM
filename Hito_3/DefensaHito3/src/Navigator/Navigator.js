import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/login/loginScreen2';
import RegisterScreen from '../View/register/register';
import Colors from '../config/colors';

const Stack = createStackNavigator();

function Navigator() {
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

export default Navigator;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Views/Login/LoginScreen';
import MyOnboarding from '../Views/Onboarding/OnBoarding';


import Colors from '../Config/Colors';

const Stack = createStackNavigator();

function mainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={MyOnboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: Colors.azul,
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
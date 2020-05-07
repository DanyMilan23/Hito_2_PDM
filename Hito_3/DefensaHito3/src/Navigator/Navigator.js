import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Views/Login/LoginScreen';
import Screen1 from '../Views/Screens/Screen_1';
import Screen2 from '../Views/Screens/Screen_2';
import Screen3 from '../Views/Screens/Screen_3';

import Colors from '../Config/Colors';

const Stack = createStackNavigator();

function mainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login Screen"
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
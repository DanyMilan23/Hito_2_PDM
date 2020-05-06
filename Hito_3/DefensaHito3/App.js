/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/Views/Screens/Screen_3'
//npx react-native run-android <Login/>
const App: () => React$Node = () => {
  return (
    <>
      <Login/>
      
    </>
  );
};



export default App;

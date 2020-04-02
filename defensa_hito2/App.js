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
import Corona from './src/view/coronaScreen'
import Inputt from './src/components/textInput'

const App: () => React$Node = () => {
  return (
    <>
      <Corona/>
     
    </>
  );
};


export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MyComponent from './src/test/MyComponent';
import Logo from './src/login/logo'

const App: () => React$Node = () => {
  return (
    <>
      <View  style={styles.body}>
        <View  style={styles.container}>
          <MyComponent style={styles.box} text = "Cosa a mostrar"></MyComponent>
          <Logo/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor:Colors.primary,
  },
  container:{
    flex:0.5,
    flexDirection: 'column',
    alignItems:'center'
  },
  box:{
    height:100
  }
});

export default App;

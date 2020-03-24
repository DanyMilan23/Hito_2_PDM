/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MyComponent from './src/test/MyComponent';
import Logo from './src/login/logo';
import User from './src/img/username.png';
import Pass from './src/img/pass.png';
import Input from './src/login/input';

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <MyComponent style={styles.box} text="Cosa a mostrar"></MyComponent>
          <Logo />
          <Input
            source={User}
            placeholder="Username"
            secureTextEntry={false}
            autoCorrect={false}
          />
           <Input
            source={Pass}
            placeholder="Password"
            secureTextEntry={false}
            autoCorrect={false}
          />
          
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    height: 100,
  },

});

export default App;

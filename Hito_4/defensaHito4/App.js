/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigator from './src/Navigator/Navigator'
//npx react-native run-android
const App: () => React$Node = () => {
  return (
    <>
      <MainNavigator/>
    </>
  );
};



export default App;

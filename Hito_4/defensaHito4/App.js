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
import Onboarding from './src/Views/Onboarding';
import Imagen from './src/images'
//npx react-native run-android
const data = [
  {
    title: 'Confianza',
    text: 'Lo mejor en medicina.\nEn sus manos',
    imagen: Imagen.LOGO,
    color: '#F07243',
  },
  {
    title: 'Informacion',
    text: 'Toda la informacion a su alcance',
    imagen:Imagen.LOGO,
    color: '#F07243',
  },
  {
    title: 'Interaccion',
    text: 'Interacciones en tiempo real',
    imagen:Imagen.LOGO,
    color: '#F07243',
  },
];
const App: () => React$Node = () => {
  return (
    <>
      <Onboarding data={data} />
    </> 
  );
};

export default App;

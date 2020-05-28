import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import ButtonIcon from '../../components/buttonIcon';
import FirebasePlugin from '../../plugins/firebase/firebase';

import Colors from '../../config/colors';
import Images from '../../config/images';

const AppScreen = ({navigation}) => {
  const onPressSetting = () => {
    Alert.alert('Setting button pressed!!!');
    navigation.navigate('Settings')
  };

  const onPressLogout = () => {
    try {
      FirebasePlugin.auth().signOut()
        .then(() => {
            Alert.alert('Logout App', 'Successfully Logout', [{
              text: 'Login App', onPress: () => {navigation.navigate('Login Screen')}
            }]);
        });
    } catch (e) {
      Alert.alert('Contact admin', e.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting}/>
      ),
      headerRight: () => (
        <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}/>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text>App Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
});

export default AppScreen;
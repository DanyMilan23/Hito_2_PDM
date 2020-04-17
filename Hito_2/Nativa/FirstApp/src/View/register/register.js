import React from 'react';
import {StyleSheet, View, Text,TextInput ,TouchableOpacity} from 'react-native';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images';

const registerScreen = ({onChangeTextEmail,onChangeTextPassword,onPressRegister}) => {
    return (
        <View style={styles.contariner}>
            <Text>Register Screen</Text>
        </View>
    );
};

const stylesLoginScreen = StyleSheet.create({
  container: {
    
  },
 
});
export default registerScreen;
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images'


function emailTextField({error,onChangeText,onEndEditing,placeHolder,secureTextEntry,autoCorrect}) {
    return (
        <View>
          <Text style={styles.errorText}>{error}</Text>
          <View style={styles.textFieldView}>
            <TextInput style={styles.textField}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            placeHolder={placeHolder}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            placeholderTextColor={Colors.white}
            selectionColor={Colors.blue}
            underlineColorAndroid="transparent"
            >
              
            </TextInput>
          </View>
          
        </View>
    );
}
const styles = StyleSheet.create({
  textField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  textFieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.80,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.black2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.silver,
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});


export default emailTextField;
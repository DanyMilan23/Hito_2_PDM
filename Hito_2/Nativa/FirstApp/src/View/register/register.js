import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import ButtonLogin from '../../components/login/button';
import TextInputLogin from '../../components/login/textInput';
import EmailTextField from '../../components/login/emailTextField';
import Utils from '../../utils/utils';
import LogoLogin from '../../components/login/logo';
import DismissKeyboard from '../../components/login/dismissKeyboard';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import Imagen from '../../config/images';
import PropTypes from 'prop-types';
import Fire from '../../plugins/firebase/firebase';

const registerScreen = ({
  onChangeTextEmail,
  onChangeTextPassword,
  onPressRegister,
  navigation,
}) => {
  const [usuario, guardarUsuario] = useState({
    user: '',
    password: '',
  });
  const [errorEmail, guardarErrorEmail] = useState('');
  const [errorPassword, guardarErrorPassword] = useState('');
  const _validateEmailAddress = () => {
    let isValidEmail = Utils.isValidEmail(usuario.user);
    isValidEmail ? guardarErrorEmail('') : guardarErrorEmail('Email invalido');
    return isValidEmail;
  };
  const _validatePassword = () => {
    let isValidPassword = Utils.isValidField(usuario.password);
    isValidPassword
      ? guardarErrorPassword('')
      : guardarErrorPassword('Password invalido');
    return isValidPassword;
  };
  const addGroupEmails = (emailID, userID) => {
    const emailsAddedRef = firestore
      .collection('groupEmails').doc(userID)
      .collection('email').doc('EMAILS_ADDED');

    emailsAddedRef.set({
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('USER ID creado:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  }
  const _onPressLogin = () => {
    let emailData = _validateEmailAddress();
    let passwordData = _validateEmailAddress();
    if (emailData && passwordData) {
      loginApp(usuario.user, usuario.password);
    } else {
      Alert.alert('Hay errores');
    }
  };
  const loginApp = (email, password) => {
    try {
      Fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
         
          Alert.alert('Register Form', 'Registered user', [
            {
              text: 'Enter credentials',
              onPress: () => {
                navigation.navigate('Login Screen');
              },
            },
          ]);
        })
        .catch(error => {
          
          Alert.alert('Invalid Values', error.message);
        });
    } catch (error) {
      
      Alert.alert('Invalid Values', error.message);
    }
  };
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <View style={styles.container}>
          <SafeAreaView>
            <View style={styles.form}>
              <EmailTextField
                error={errorEmail}
                onChangeText={value => {
                  console.log(value);
                  guardarUsuario({
                    ...usuario,
                    user: value,
                  });
                }}
                onEndEditing={_validateEmailAddress}
                placeholder={Constants.STRINGS.EMAIL}
                secureTextEntry={false}
                autoCorrect={false}
              />

              <TextInputLogin
                onChangeText={value => {
                  guardarUsuario({
                    ...usuario,
                    password: value,
                  });
                }}
                error={errorPassword}
                source={Imagen.PASSWORD}
                onEndEditing={_validatePassword}
                placeholder={Constants.STRINGS.PASSWORD}
                secureTextEntry={true}
                autoCorrect={false}
              />
              <ButtonLogin
                onPress={_onPressLogin}
                titleButton={Constants.STRINGS.TITLE_BUTTON}
              />
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
  form: {flex: 1, justifyContent: 'center', width: '80%'},
});
export default registerScreen;

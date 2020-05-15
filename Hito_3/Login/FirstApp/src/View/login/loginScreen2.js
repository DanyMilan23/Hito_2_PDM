import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert
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
import Fire from '../../plugins/firebase/firebase'

const loginScreen2 =({navigation})=>{
    const [usuario,guardarUsuario]=useState({
        user:'',
        password:''
    }) 
    const [errorEmail,guardarErrorEmail]=useState('') 
    const [errorPassword,guardarErrorPassword]=useState('')      
    const _validateEmailAddress = () =>{
        let isValidEmail =Utils.isValidEmail(usuario.user)
        isValidEmail ? guardarErrorEmail('') : guardarErrorEmail('Email invalido')
       return isValidEmail
    }
    const _validatePassword = () =>{ 
        let  isValidPassword=Utils.isValidField(usuario.password)
        isValidPassword ? guardarErrorPassword('') : guardarErrorPassword('Password invalido')
        return isValidPassword
    }
    const _onPress=()=>{ 
       let emailData =_validateEmailAddress();
       let passwordData=_validateEmailAddress();
       if(emailData && passwordData){
         loginApp(usuario.user,usuario.password);
       }
       else{
         Alert.alert('Hay errores')
       }

    }
    const loginApp = (email,password) =>{
      console.log(email)
      console.log(password)
        try {
          Fire.auth().signInWithEmailAndPassword(email, password).then((user)=>{
            console.log(user)
            navigation.navigate('Register');
            Alert.alert("usuario logeado");
          }).catch((error)=>{
            Alert.alert('Error:', error.message)
          })
        } catch (error) {
          Alert.alert('Error:', error.message)
        }
    }
    return(
        <DismissKeyboard>
          <KeyboardAvoidingView
            style={stylesLoginScreen.container}
            behavior="height"
            enabled>
            <View style={stylesLoginScreen.container}>
            <SafeAreaView>
              <LogoLogin style={stylesLoginScreen.logo} />
              <View style={stylesLoginScreen.form}>
                <EmailTextField
                    error={errorEmail}
                    onChangeText={(value) => {
                        console.log(value)
                        guardarUsuario({
                          ...usuario,
                          user:value,
                        });
                      }}
                  onEndEditing={_validateEmailAddress}
                  placeholder={Constants.STRINGS.EMAIL}
                  secureTextEntry={false}
                  autoCorrect={false}
                />

                <TextInputLogin
                  onChangeText={(value) => {
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
                  onPress={_onPress}
                  titleButton={Constants.STRINGS.TITLE_BUTTON}
                />
              </View>
              </SafeAreaView>
            </View>
          </KeyboardAvoidingView>
        </DismissKeyboard>

    );
}
loginScreen2.propTypes = {

};
const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',

  },
  logo: {flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: {flex: 1, justifyContent: 'center', width: '80%'},
});
export default loginScreen2;
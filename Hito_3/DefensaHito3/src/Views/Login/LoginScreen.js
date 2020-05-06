import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import ButtonLogin from '../../Components/button';
import TextInputLogin from '../../Components/textInput';
import EmailTextField from '../../Components/emailTextField';
import Utils from '../../Utils/Utils';
import LogoLogin from '../../Components/logo';
import DismissKeyboard from '../../Components/dismissKeyboard';
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Imagen from '../../Config/Images';
import PropTypes from 'prop-types';
import Fire from '../../Plugins/firebase/Firebase'

const LoginScreen =({navigation})=>{
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

const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',

  },
  logo: {flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: {flex: 1, justifyContent: 'center', width: '80%'},
});
export default LoginScreen;
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
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

const loginScreen2 =()=>{
    const [usuario,guardarUsuario]=useState({
        user:'',
        password:''
    }) 
    const [errorEmail,guardarErrorEmail]=useState('') 
    const [errorUsername,guardarerrorUsername]=useState('')      
    const _validateEmailAddress = () =>{
        let isValidEmail =Utils.isValidEmail(usuario.user)
        isValidEmail ? guardarErrorEmail('') : guardarErrorEmail('Email invalido')
        console.log(usuario)
    }
    const _validateUsername = () =>{ 
        console.log("entro")  
        let isValidUsername =Utils.isValidField(usuario.password)
        isValidUsername ? guardarerrorUsername('') : guardarerrorUsername('Username invalido')
        console.log(isValidUsername)    
    }
    const _onPress=()=>{
        console.log("press")
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
                  error={errorUsername}
                  source={Imagen.PASSWORD}
                  onEndEditing={_validateUsername}
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
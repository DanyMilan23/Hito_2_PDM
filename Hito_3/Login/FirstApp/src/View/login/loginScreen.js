import React, {Component} from 'react';
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

class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this._onPress = this._onPress.bind(this);
    this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
    this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
  }

  _onPress() {
    console.log('Presionado');
    console.log(this.state.username);
    console.log(this.state.password);
  }
  _onChangeTextUsername(username) {
    this.setState({
      username: username,
    });
  }
  _onChangeTextPassword(password) {
    this.setState({
      password: password,
    });
  }
  _onEndEditing() {
    console.log('validar')
  }

  render() {
    return (
      <>
        <DismissKeyboard>
          <KeyboardAvoidingView
            style={stylesLoginScreen.container}
            behavior="padding"
            enabled>
            <View style={stylesLoginScreen.container}>
            <SafeAreaView>
              <LogoLogin style={stylesLoginScreen.logo} />
              <View style={stylesLoginScreen.form}>
                <EmailTextField
                  onChangeText={this._onChangeTextUsername}
                  onEndEditing={this._onEndEditing}
                  placeholder={Constants.STRINGS.EMAIL}
                  secureTextEntry={false}
                  autoCorrect={false}
                />

                <TextInputLogin
                  onChangeText={this._onChangeTextPassword}
                  source={Imagen.PASSWORD}
                  placeholder={Constants.STRINGS.PASSWORD}
                  secureTextEntry={true}
                  autoCorrect={false}
                />
                <ButtonLogin
                  onPress={this._onPress}
                  titleButton={Constants.STRINGS.TITLE_BUTTON}
                />
              </View>
              </SafeAreaView>
            </View>
          </KeyboardAvoidingView>
        </DismissKeyboard>
      </>
    );
  }
}
const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {flex: 1, width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: {flex: 1, justifyContent: 'center', width: '80%'},
});

export default loginScreen;

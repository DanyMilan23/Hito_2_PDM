import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonLogin from '../../components/login/button';
import TextInputLogin from '../../components/login/textInput';
import LogoLogin from '../../components/login/logo';
import Constants from '../../config/constants';
import Colors from '../../config/colors';
import User from '../../img/username.png';
import Pass from '../../img/pass.png';

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
  render() {
    return (
      <>
        <View style={stylesLoginScreen.container}>
          <LogoLogin style={stylesLoginScreen.logo} />
          <View style={stylesLoginScreen.form}>
            <TextInputLogin
              onChangeText={this._onChangeTextUsername}
              source={User}
              placeholder={Constants.USERNAME}
              secureTextEntry={false}
              autoCorrect={false}
            />
            <TextInputLogin
              onChangeText={this._onChangeTextPassword}
              source={Pass}
              placeholder={Constants.PASSWORD}
              secureTextEntry={true}
              autoCorrect={false}
            />
            <ButtonLogin
              onPress={this._onPress}
              titleButton={Constants.TITLE_BUTTON}
            />
          </View>
        </View>
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

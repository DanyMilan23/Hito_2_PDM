import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//import ButtonLogin from '../../components/login/button';
//import TextInputLogin from '../../components/login/textInput';
import Constants from '../../src/config/constants';
import Colors from '../../src/config/colors';
import Logo from '../components/logo'
import Ciudad from '../components/ciudad'
import Boton from '../components/button'
import InputSimple from '../components/input'

class coronaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cbba:{
        conf:'',
        pos:''
      },
      lpz:{
        conf:'',
        pos:''
      },
      oru:{
        conf:'',
        pos:''
      },
      busqueda:''
    };
    this._onPress = this._onPress.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(busqueda){
      if(busqueda==='confirmado'){
        console.log(this.state.cbba.conf+this.state.oru.conf+this.state.lpz.conf)
      }
      if(busqueda==='posible'){
         console.log(this.state.cbba.pos+this.state.oru.pos+this.state.lpz.pos)
      }
  }
  _onPress() {
    console.log('Presionado');
    console.log(this.state.username);
    console.log(this.state.password);
  }
   agregarCochaConf = datos => {
    const cocha = [...this.state.cbba.conf, datos];
    this.setState({ 
      cocha
    })
  }
  agregarCochaPos = datos => {
    const cocha = [...this.state.cbba.pos, datos];
    this.setState({ 
      cocha
    })
  }
  //lpz
  agregarLpzConf = datos => {
    const cocha = [...this.state.lpz.conf, datos];
    this.setState({ 
      cocha
    })
  }
  agregarLpzPos = datos => {
    const cocha = [...this.state.lpz.pos, datos];
    this.setState({ 
      cocha
    })
  }
  //oru
  agregarOruConf = datos => {
    const cocha = [...this.state.oru.conf, datos];
    this.setState({ 
      cocha
    })
  }
  agregarOruPos = datos => {
    const cocha = [...this.state.oru.pos, datos];
    this.setState({ 
      cocha
    })
  }

  render() {
    return (
      <>
        <View style={stylesLoginScreen.container}>
          <Logo style={stylesLoginScreen.logo} />
          
            <Ciudad nombre='Cochabamba' pos={this.agregarCochaPos} conf={this.agregarCochaConf}></Ciudad>
            <Ciudad nombre='La Paz' pos={this.agregarLpzPos} conf={this.agregarLpzConf}></Ciudad>
            <Ciudad nombre='Oruro' pos={this.agregarOruPos} conf={this.agregarOruConf}></Ciudad>
            <InputSimple
              placeholder='Ingrese Busqueda'
            />
            <Boton 
              onPress={this._onPress}
              titleButton='Calcular'
            />
          
          
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
   
  },
  logo: { width: '100%', resizeMode: 'contain', alignSelf: 'center'},
  form: { justifyContent: 'center', width: '80%'},
});

export default coronaScreen;

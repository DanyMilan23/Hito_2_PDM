import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Constants from '../../src/config/constants';
import Colors from '../../src/config/colors';
import Logo from '../components/logo'
import Ciudad from '../components/ciudad'
import Boton from '../components/button'
import InputSimple from '../components/input'
import TextInput from '../components/textInput'
class coronaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cbac:'',
      cbas:'',
      lpzc:'',
      lpzs:'',
      oruc:'',
      orus:'',
      busqueda:''
    };
    this._onPress = this._onPress.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(value){
      this.setState({busqueda:value}  )
  }
  _onPress() {
    console.log('press')
    console.log(this.state)
    if(this.state.busqueda==='confirmado'){
        console.log('entro conf')
        if(this.state.cbac > this.state.lpzc && this.state.cbac > this.state.oruc){
          console.log("Cochabamba");
        }
        else if(this.state.lpzc > this.state.cbac && this.state.lpzc > this.state.oruc){
           console.log("La Paz");
        }
        else{
           console.log("Oruro");
        }
    }
    if(this.state.busqueda==='posible'){
        if(this.state.cbas > this.state.lpzs && this.state.cbas > this.state.orus){
          console.log("Cochabamba");
        }
        else if(this.state.lpzs > this.state.cbas && this.state.lpzs > this.state.orus){
           console.log("La Paz");
        }
        else{
           console.log("Oruro");
        }
    }
  }
  //cbba
  agregarCochaConf = datos => {
    this.setState({cbac:datos})}
  agregarCochaPos = datos => {
    this.setState({cbas:datos})}
  //lpz
  agregarLpzConf = datos => {
    this.setState({lpzc:datos})}
  agregarLpzPos = datos => {
    this.setState({lpzs:datos})}
  //oru
  agregarOruConf = datos => {
    this.setState({oruc:datos})}
  agregarOruPos = datos => {
    this.setState({ orus:datos})}

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
              onChangeText={this._onChange}
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

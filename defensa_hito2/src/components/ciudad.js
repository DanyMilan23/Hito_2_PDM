import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import InputCaso from '../components/textInput'

class ciudad extends Component {
    constructor(props) {
    super(props);
    this.state = {
        conf:'',
        pos:'',
    };
    this._onChangeTextConf = this._onChangeTextConf.bind(this);
    this._onChangeTextPos = this._onChangeTextPos.bind(this);  
  }
  _onChangeTextConf(conf) {
    this.setState({
      conf: conf,
    });
    this.props.conf(this.state.conf);
  }
   _onChangeTextPos(pos) {
    this.setState({
      pos: pos,
    });
    this.props.pos(this.state.pos);
  }

    render() {
        return (
            <>
                <View style={stylesCiudad.form}>
                    <Text style={stylesCiudad.title}>{this.props.nombre}</Text>
                    <InputCaso
                        placeholder='Nro Casos'
                        enunciado='Casos Confirmados'
                        onChangeText={this._onChangeTextConf}
                        />
                    <InputCaso
                        placeholder='Nro Casos'
                        enunciado='Casos Sospechosos'
                        onChangeText={this._onChangeTextPos}
                        />
                   
                </View>    
            </>
        );
    }
}
const stylesCiudad = StyleSheet.create({

  title: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    height: 40,
    width: '100%',
     alignItems:'center',
        justifyContent:'center',
  },
  form: { justifyContent: 'center', width: '100%'},
});

ciudad.propTypes = {
    nombre:PropTypes.string.isRequired,
};

export default ciudad;
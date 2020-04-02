import React, {Component, useState} from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../config/colors';

class inputSimple extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={stylesTextInput.row} >
        <TextInput
          onChangeText={this.props.onChangeText}
          style={stylesTextInput.textInput}
          placeholder={this.props.placeholder}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}
const stylesTextInput = StyleSheet.create({
  row: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    height: 40,
    borderColor: Colors.silver,
    borderRadius: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width:'30%'
  },
});

inputSimple.propTypes = {
  placeholder: PropTypes.string.isRequired,

};

export default inputSimple;

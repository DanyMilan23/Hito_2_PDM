import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const buttonSkip = ({color, onPress, titleButton}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          marginBottom: 12,
          paddingVertical: 12,
          borderRadius: 5,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'rgba(255,255,255,0.7)',
        }}
        onPress={onPress}>
        <Text style={{color: '#ffffff', textAlign: 'center', height: 20,fontSize: 17,}}>
          {titleButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default buttonSkip;

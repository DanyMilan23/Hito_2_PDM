import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const buttonNext = ({color, onPress, titleButton}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          marginBottom: 12,
          paddingVertical: 12,
          borderRadius: 5,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: color,
        }}
        onPress={onPress}>
        <Text style={{color: color, textAlign: 'center', height: 20,fontSize: 17,}}>
          {titleButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default buttonNext;

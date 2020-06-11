import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  Image,
} from 'react-native';
import ButtonSkip from './ButtonSkip';
import ButtonNext from './ButtonNext';
const ButtonsFooter = ({title1, title2,pressPrev,presNext,color}) => {
  return (
    <>
      <View style={styles.form}>
        <ButtonSkip  titleButton={title1} onPress={pressPrev} color={color}/>
        <ButtonNext  titleButton={title2} onPress={presNext} color={color}/>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'flex-end',
    marginTop: 100,
  },
});

export default ButtonsFooter;

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  Image
} from 'react-native';
//components
import Button from '../../Components/ButtonNavigation';
import TextInputLogin from '../../Components/textInput';
import EmailTextField from '../../Components/emailTextField';
import LogoLogin from '../../Components/logo';
import DismissKeyboard from '../../Components/dismissKeyboard';
//Validaciones
import Utils from '../../Utils/Utils';
//Configuraciones
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Imagen from '../../Config/Images';
import PropTypes from 'prop-types';


const LoginScreen =({navigation})=>{
    
    return(
        <>
            <View style={styles.container}>
                <Image source={Imagen.IMAGEN1} style={styles.image}/>
                <Text style={styles.text}>
                    {Constants.STRINGS.PDM}
                </Text>
                <Text style={styles.text2}>
                    {Constants.STRINGS.MATERIA}
                </Text>
                <Text style={styles.text2}>
                    {Constants.STRINGS.MATERIA2}
                </Text>
                <View style={styles.form}>
                    <Button titleButton={Constants.STRINGS.PREV}/>
                    <Button titleButton={Constants.STRINGS.NEXT}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.verde,
    alignItems: 'center',
  },
  image:{
        width:480,
        height:520,
        left:110,
        top:-120,
    },
    text:{
        color:'white',
        backgroundColor:'transparent',
        fontSize:40,
    },
    text2:{
        alignItems: 'center',
        color:'white',
        backgroundColor:'transparent',
        fontSize:20,
    },
    form: {flexDirection:'row',justifyContent: 'space-between', width: '90%', alignItems: 'flex-end',marginTop:100},
});
export default LoginScreen;
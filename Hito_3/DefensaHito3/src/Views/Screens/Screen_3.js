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
import OnboardingFactory from '../../Components/OnboardingFactory'
//Configuraciones
import Constants from '../../Config/Constants';
import Colors from '../../Config/Colors';
import Imagen from '../../Config/Images';
import PropTypes from 'prop-types';


const Screen_3 =({navigation})=>{
    const estilitos = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.azul,
            alignItems: 'center',
        },
        })
    return(
        <>
            <OnboardingFactory
                imagen={Imagen.IMAGEN3}
                textoPrincipal={Constants.STRINGS.FIREBASE}
                textSecundario={Constants.STRINGS.TEMA}
                textBoton1={Constants.STRINGS.PREV}
                textBoton2={Constants.STRINGS.NEXT}
                funcionBoton1={()=>{navigation.navigate('Screen2');}}
                funcionBoton2={()=>{navigation.navigate('Login Screen');}}
                stylesPage={estilitos}
            />
        </> 
    );
}

export default Screen_3;
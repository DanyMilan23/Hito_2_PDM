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


const Screen_1 =({navigation})=>{
    const estilitos = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.verde,
            alignItems: 'center',
        },
        })
    return(
        <>
            <OnboardingFactory
                imagen={Imagen.IMAGEN1}
                textoPrincipal={Constants.STRINGS.PDM}
                textSecundario={Constants.STRINGS.MATERIA}
                textBoton1={Constants.STRINGS.PREV}
                textBoton2={Constants.STRINGS.NEXT}
                funcionBoton1={()=>{}}
                funcionBoton2={()=>{navigation.navigate('Screen2');}}
                stylesPage={estilitos}
            />
        </> 
    );
}

export default Screen_1;
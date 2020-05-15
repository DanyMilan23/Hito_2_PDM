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


const Screen_2 =({navigation})=>{
    const estilitos = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.naranja,
            alignItems: 'center',
        },
    })
    return(
        <>
            <OnboardingFactory
                imagen={Imagen.IMAGEN2}
                textoPrincipal={Constants.STRINGS.DEFENSA}
                textSecundario={Constants.STRINGS.DOCENTE}
                textBoton1={Constants.STRINGS.PREV}
                textBoton2={Constants.STRINGS.NEXT}
                funcionBoton1={()=>{navigation.navigate('Screen1');}}
                funcionBoton2={()=>{navigation.navigate('Screen3');}}
                stylesPage={estilitos}
            />
        </> 
    );
}

export default Screen_2;
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
import Description from './Description';
import Footer from './ButtonsFooter';

function OnboardingFactory({
  imagen,
  textoPrincipal,
  textSecundario,
  funcionBoton1,
  funcionBoton2,
  color,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:color,
        alignItems: 'center',
      }}>
      <Description
        imagen={imagen}
        text1={textoPrincipal}
        text2={textSecundario}
      />
      <Footer
        title1="Skip"
        title2="Next"
        pressPrev={()=>{}}
        presNext={()=>{}}
        color={color}
      />
    </View>
  );
}

export default OnboardingFactory;

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

const OnboardingFactory = ({
  imagen,
  textoPrincipal,
  textSecundario,
  funcionBoton1,
  funcionBoton2,
  color,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#ffffff',
        alignItems: 'center',
      }}>
      <Description
        imagen={imagen}
        text1={textoPrincipal}
        text2={textSecundario}
        color={color}
      />
      <Footer
        title1="Skip"
        title2="Next"
        pressPrev={funcionBoton1}
        presNext={funcionBoton2}
        color={color}
      />
    </View>
  );
}

export default OnboardingFactory;

import React from 'react';
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
import Description from './Onboarding/Description'
import Footer from "./Onboarding/ButtonsFooter";
//Configuraciones
import Colors from '../Config/Colors';


function OnboardingFactory({stylesPage,imagen,textoPrincipal,textSecundario,textBoton1,textBoton2,funcionBoton1,funcionBoton2}) {
    return (
        <View style={stylesPage.container}>
            <Description
                imagen={imagen}
                text1={textoPrincipal}
                text2={textSecundario}
            />
            <Footer
                title1={textBoton1}
                title2={textBoton2}
                pressPrev={funcionBoton1}
                presNext={funcionBoton2}
            />
        </View>
    );
}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.azul,
    alignItems: 'center',
  },
});*/

export default OnboardingFactory;
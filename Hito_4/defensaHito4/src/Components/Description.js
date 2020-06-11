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


const Description = ({imagen,text1,text2}) => {
    return (
        <View style={styles.container}>
                <Image source={imagen} style={styles.image}/>
                <Text style={styles.text}>
                    {text1}
                </Text>
                <Text style={styles.text2}>
                    {text2}
                </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
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
        width:'80%',
        alignItems: 'center',
        color:'white',
        backgroundColor:'transparent',
        fontSize:20,
    },
   
});

export default Description;
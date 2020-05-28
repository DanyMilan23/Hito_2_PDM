import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

import ButtonIcon from '../../components/buttonIcon';
import Button from '../../components/login/button'
import CustomTextBox from '../../components/customTextBox'
import Fire,{firestore} from '../../plugins/firebase/firebase'

import Colors from '../../config/colors';
import Constants from '../../config/constants'
import Utils from '../../utils/utils'
 
const SettingScreen = ({navigation}) => {
  const [usuario,setUsuario]=useState({
    email:'',
    password:'',
  })
  const [error,SetError]=useState('')
  const [isLoading, setIsLoading] = useState(false)
  const validateCTextField = () =>{
    let isValidField = Utils.isValidField(usuario.email)
    isValidField? SetError(''):SetError('Email no valido')
    return isValidField
  }
  const onPressAdd = () =>{
    let isValid = validateCTextField()
    if(isValid){
        addEmail()
    }else{
      Alert.alert('Email erroneo')
    }
  }

  const addEmail=()=>{
    //const emailRef = firestore.collection('email').doc()
     const emailRef = firestore.collection('emails').doc();
    const userID = Fire.auth().currentUser.uid;

    emailRef.set({
      emailID: emailRef.id,
      emailName: usuario.email,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('Email creado:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  }
  return (
    <View style={styles.container}>
      <CustomTextBox
        value={usuario.email}
        autoCorrect={false}
        placeHolder={Constants.STRINGS.ADD_EMAIL}
        error={error}
        onChange={(value)=>{setUsuario({email:value})}}
        onValidate={()=>{}}
      />
      <Button
        onPress={onPressAdd}
        titleButton='Registrar'
      ></Button>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
  },
});

export default SettingScreen;
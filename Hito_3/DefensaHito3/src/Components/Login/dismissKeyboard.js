import React, {Component} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const dismissKeyboard = ({children}) =>{
    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

export default dismissKeyboard;


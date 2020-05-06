import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Imagen from '../Config/Images'

export default class logo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <Image source={Imagen.LOGO} style={styles.image}/>
                    
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:180,
        height:180,
    },
   
})
import React from 'react';
import MyOnboarding from 'onboarding_danymilan/src';
import Imagen from '../../Config/Images' 

const data = [
  {
    title: 'Confianza',
    text: 'Lo mejor en medicina.\nEn sus manos',
    imagen: Imagen.IMAGEN1,
    color: '#F07243',
  },
  {
    title: 'Informacion',
    text: 'Toda la informacion a su alcance',
    imagen:Imagen.IMAGEN2,
    color: '#F07243',
  },
  {
    title: 'Interaccion',
    text: 'Interacciones en tiempo real',
    imagen:Imagen.IMAGEN3,
    color: '#F07243',
  },
];
const OnBoarding = ({navigation}) => {
    return (
        <>
            <MyOnboarding data={data} funciondone={()=>{navigation.navigate('Login')}}/>
        </>
    );
};

export default OnBoarding;
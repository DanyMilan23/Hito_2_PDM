import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingFactory from '../Components/OnboardingFactory';

const Stack = createStackNavigator();

const OnBoarding = ({data, done}) => {
  //const []=data;
  const [screen, setScreen] = useState(null);
  useEffect(() => {
    const iteracion = (datos, done) => {
      let salida = [];
      for (let i = 0; i < datos.length; i++) {
        let sig = i == datos.length - 1 ? 0 : i + 1;
        let status = i == 0 ? true : false;

        salida.push({
          title: datos[i].title,
          text: datos[i].text,
          imagen: datos[i].imagen,
          color: datos[i].color,
          posicion: i,
          siguiente: sig,
          estado: status,
          funcion: done,
        });
      }
      setScreen(salida);
    };
    iteracion(data, done);
  }, [data]);
  return (
    <View>
      {screen != null ? (
        <View>
          {screen.map(sc => (
            
            <View>
            <OnboardingFactory
              imagen={sc.imagen}
              textoPrincipal={sc.title}
              textSecundario={sc.text}
              
              color={sc.color}
            />
            {console.log(sc)}
            </View>
          ))}
          
        </View>
      ) : null}
    </View>
  );
};

export default OnBoarding;

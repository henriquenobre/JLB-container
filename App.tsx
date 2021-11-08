import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from './src/screens/Signin/index';
import { Menu } from './src/screens/Menu';
import { Container3 } from './src/screens/Container3';
import { Container6 } from './src/screens/Container6';
import { ContainerOptions } from './src/screens/ContainerOptions';
import { Locacao } from './src/screens/Locacao';
import { Especificacoes } from './src/screens/Especificacoes';
import { Contrato } from './src/screens/Contrato';
import { Alugar } from './src/screens/Alugar';
import { Encerrar } from './src/screens/Encerrar';


export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  const Stack = createNativeStackNavigator();

  if(!fontsLoaded){
    return <Apploading/>
  }

  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      headerShown: false
  }}>
    <Stack.Screen name="SingIn" component={SignIn} />
    <Stack.Screen name="Menu" component={Menu} />
    <Stack.Screen name="Container3" component={Container3} />
    <Stack.Screen name="Container6" component={Container6} />
    <Stack.Screen name="ContainerOptions" component={ContainerOptions} />
    <Stack.Screen name="Locacao" component={Locacao} />
    <Stack.Screen name="Especificacoes" component={Especificacoes} />
    <Stack.Screen name="Contrato" component={Contrato} />
    <Stack.Screen name="Alugar" component={Alugar} />
    <Stack.Screen name="Encerrar" component={Encerrar} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

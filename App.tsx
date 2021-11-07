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
      <Stack.Navigator>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    <Stack.Screen name="SingIn" component={SignIn} />
    <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

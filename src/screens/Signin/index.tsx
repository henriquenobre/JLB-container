import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/logoLogin.png'
import {auth} from '../../config/firebaseConfig.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './style';
import { Platform } from 'react-native';
import { useEffect } from 'react';


export function SignIn({ navigation }) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState<boolean>(false);

    useEffect(() => {
        setErrorLogin(false)
    }, [email, password])
   

    const loginFirebase = () => {
        
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          
          let user = userCredential.user;
          navigation.navigate('Menu')
          
        })
        .catch((error: any) => {
          setErrorLogin(true)
          let errorCode = error.code;
          let errorMessage = error.message; 
          // ..
        });
    }


    return (
        <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <S.Image
                source={IllustrationImg}
                resizeMode="stretch"
            />

            <S.Content >
                <S.Title >
                    Login
                </S.Title>

                <S.InputField
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}

                />
                <S.InputField
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                {errorLogin 
                ?
                <S.containerAlert>
                    <MaterialCommunityIcons 
                    name='alert-circle'
                    size={20}
                    color='#ff4040'
                    />
                <S.TextWarning>Email ou Senha Inválidos</S.TextWarning>
                </S.containerAlert>
                :
                <></>
                }

                {email === '' || password === ''
                ?
                    <ButtonIcon
                        title="Login"
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Menu')} 
                        disabled={true}
                    />                
                :
                    <ButtonIcon
                        title="Login"
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Menu')} 
                    />                
                }
                <S.SubTitle onPress={() => navigation.navigate('SingUp')}>
                    Cadastre-se
                </S.SubTitle>

            </S.Content>
        </S.Container>
    )
}

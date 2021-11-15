import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.jpeg'
import {firebase} from '../../config/firebaseConfig.js'
import * as S from './style';
import { Platform } from 'react-native';

export function SignIn({ navigation }) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          
          let user = userCredential.user;
          console.log(user)
          navigation.navigate('Menu')
          
        })
        .catch((error: any) => {
        
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
                    placeholder="Usuário"
                    onChangeText={(text) => setEmail(text)}

                />
                <S.InputField
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

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
                        onPress={loginFirebase} 
                    />                
                }
                <S.SubTitle>
                    Cadastre-se
                </S.SubTitle>

            </S.Content>
        </S.Container>
    )
}

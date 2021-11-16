import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.jpeg'
import { auth } from '../../config/firebaseConfig.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './style';
import { Platform } from 'react-native';
import { useEffect } from 'react';


export function SignUp({ navigation }) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRegister, setErrorRegister] = useState<boolean>();

    useEffect(() => {
        setErrorRegister(false)
    }, [email, password])


    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                navigation.navigate('SingIn')
                console.log('cadastrou')
                // ...
            })
            .catch((error) => {
                setErrorRegister(true)
                var errorCode = error.code;
                var errorMessage = error.message;
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
                    Cadastre-se
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
                {errorRegister
                    ?
                    <S.containerAlert>
                        <MaterialCommunityIcons
                            name='alert-circle'
                            size={20}
                            color='#ff4040'
                        />
                        <S.TextWarning>Digite uma senha com no mínimo 6 dígitos</S.TextWarning>
                    </S.containerAlert>
                    :
                    <></>
                }

                {email === '' || password === ''
                    ?
                    <ButtonIcon
                        title="Cadastrar"
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('SignIn')}
                        disabled={true}
                    />
                    :
                    <ButtonIcon
                        title="Cadastrar"
                        activeOpacity={0.5}
                        onPress={register}
                    />
                }
                <S.SubTitle onPress={() => navigation.navigate('SingIn')}>
                    Ja é cadastrado?
                </S.SubTitle>

            </S.Content>
        </S.Container>
    )
}

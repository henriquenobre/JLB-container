import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.jpeg'
import * as S from './style';

export function SignIn({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

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
                />
                <S.InputField
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <ButtonIcon
                    title="Login"
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('Menu')} />
                <S.SubTitle>
                    Cadastre-se
                </S.SubTitle>

            </S.Content>
        </S.Container>
    )
}

import React, { useState, useEffect } from 'react';
import { containers } from './fakeData'
import IllustrationImg from '../../assets/logoLogin.png'
import StatusIcon from '../../assets/status.png'
import Container3Icon from '../../assets/container3.png'
import Container6Icon from '../../assets/container6.png'
import CalendarioIcon from '../../assets/calendario.png'
import LocalizacaoIcon from '../../assets/localizacao.png'
import * as S from './style';

export function Menu({ navigation }) {
    const [text, setText] = useState('');  

    useEffect(() => {
        console.log(containers)
    }, [])
        
    return (
        <S.Container>
            <S.Image
                source={IllustrationImg}
                resizeMode="stretch"
            />

            <S.Content >
                <S.CardMenu onPress={() => navigation.navigate('Status', {id: 50})}>
                    <S.TextCard >Status</S.TextCard>
                    <S.IconImage
                        source={StatusIcon}
                        />
                </S.CardMenu>

               {console.log(containers)}

                <S.CardMenu onPress={() => navigation.navigate('Container6', {id: 50})}>
                    <S.TextCard>Containers 6M</S.TextCard>
                    <S.IconImage
                        source={Container3Icon}
                    />
                </S.CardMenu>

                <S.CardMenu onPress={() => navigation.navigate('Container3', {id: 50})}>
                    <S.TextCard>Containers 3M</S.TextCard>
                    <S.IconImage
                        source={Container6Icon}
                    />
                </S.CardMenu>

                <S.CardMenu onPress={() => navigation.navigate('Notificacoes', {id: 50})}>
                    <S.TextCard>Notificações</S.TextCard>
                    <S.IconImage
                        source={CalendarioIcon}
                    />
                </S.CardMenu>

               

            </S.Content>
        </S.Container>
    )
}

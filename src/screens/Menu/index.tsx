import React, { useState, useEffect } from 'react';
import IllustrationImg from '../../assets/illustration.jpeg'
import StatusIcon from '../../assets/status.png'
import Container3Icon from '../../assets/container3.png'
import Container6Icon from '../../assets/container6.png'
import CalendarioIcon from '../../assets/calendario.png'
import { containers } from './fakeData'
import * as S from './style';

export function Menu({ navigation }) {
    const [text, setText] = useState('');  

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

               {containers.map((container) => 
                    <S.CardMenu onPress={() => navigation.navigate('Container', {container})}>
                        <S.TextCard>{container.name}</S.TextCard>
                        <S.IconImage
                            source={container.icon}
                        />
                    </S.CardMenu>                
               )}

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

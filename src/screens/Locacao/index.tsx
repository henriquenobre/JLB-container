import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import Number1 from '../../assets/Number1.png'
import ContainerAlugar from '../../assets/ContainerAlugar.png'
import ContainerEncerrar from '../../assets/ContainerEncerrar.png'

export function Locacao({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>
            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={Number1} />
                    <S.HeaderText>Container n°1-Locação</S.HeaderText>
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >

                <S.CardContainer onPress={() => navigation.navigate('Alugar')}>
                    <S.CardIcon source={ContainerAlugar} />
                    <S.CardTittle>Alugar</S.CardTittle>
                </S.CardContainer>

                <S.CardContainer onPress={() => navigation.navigate('Encerrar')}>
                    <S.CardIcon source={ContainerEncerrar} />
                    <S.CardTittle>Encerrar</S.CardTittle>
                </S.CardContainer>



            </S.Content>
        </S.Container>
    )
}

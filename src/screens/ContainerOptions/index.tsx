import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import Number1 from '../../assets/Number1.png'
import ContainerAlugar from '../../assets/ContainerAlugar.png'
import ContainerEspecificacoes from '../../assets/ContainerEspecificacoes.png'
import ContainerInformacoes from '../../assets/ContainerInformacoes.png'
import Localizacao from '../../assets/localizacao.png'

export function ContainerOptions({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>
            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('Container6')}>
                    <S.IconNumber source={Number1} />
                    <S.HeaderText>Container n°1</S.HeaderText>
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >

                <S.CardContainer onPress={() => navigation.navigate('Locacao')}>
                    <S.CardIcon source={ContainerAlugar} />
                    <S.CardTittle>Locação</S.CardTittle>
                </S.CardContainer>

                <S.CardContainer onPress={() => navigation.navigate('Especificacoes')}>
                    <S.CardIcon source={ContainerEspecificacoes} />
                    <S.CardTittle>Especificações</S.CardTittle>
                </S.CardContainer>

                <S.CardContainer onPress={() => navigation.navigate('Contrato')}>
                    <S.CardIcon source={ContainerInformacoes} />
                    <S.CardTittle>Contrato/ {"\n"}Informações</S.CardTittle>
                </S.CardContainer>

                <S.CardContainer onPress={() => navigation.navigate('Localizacao')}>
                    <S.CardIcon source={Localizacao} />
                    <S.CardTittle>Localização</S.CardTittle>
                </S.CardContainer>

            </S.Content>
        </S.Container>
    )
}

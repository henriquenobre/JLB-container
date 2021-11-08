import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.jpeg';
import NumberContainer from '../../assets/NumberContainer.jpeg'
import ContainerAlugar from '../../assets/ContainerAlugar.png'

export function Contrato({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={NumberContainer} />
                    <S.HeaderText>Container n°1 {"\n"} Contrato</S.HeaderText>
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >

                <S.CardContainer>
                    <S.CardIcon source={ContainerAlugar} />
                    <S.CardTextDisplay>
                        <S.CardTittle>Contrato</S.CardTittle>
                        <S.SubTittle>Anexar</S.SubTittle>
                    </S.CardTextDisplay>
                </S.CardContainer>

                <S.CardContainer>
                    <S.CardObs>
                        <S.CardTittle>Observações:</S.CardTittle>
                        <S.SubTittle>Inserir Texto</S.SubTittle>
                        <S.CardInput />
                    </S.CardObs>
                </S.CardContainer>



            </S.Content>
        </S.Container>
    )
}

import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.jpeg';
import NumberContainer from '../../assets/NumberContainer.jpeg'


export function Encerrar({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={NumberContainer} />
                    <S.HeaderText>Container n°1 {"\n"} Encerrar</S.HeaderText>
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >
                <S.CardTittle>Informações Financeiras</S.CardTittle>
                <S.CardContainer>
                        <S.CardForm>
                            <S.CardText>Data ultima mensalidade:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Total de mensalidades:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Total de ganhos:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                </S.CardContainer>

            </S.Content>
        </S.Container>
    )
}

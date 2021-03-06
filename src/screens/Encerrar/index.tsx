import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import Number1 from '../../assets/Number1.png'


export function Encerrar({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={Number1} />
                    <S.HeaderText>Container n°1-Encerrar</S.HeaderText>
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
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

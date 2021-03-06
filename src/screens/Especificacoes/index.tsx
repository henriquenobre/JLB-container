import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import Number1 from '../../assets/Number1.png'
import FotoContainer from '../../assets/FotoContainer.png'

export function Especificacoes({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>
            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={Number1} />
                    <S.HeaderText>Container n°1-Especificações</S.HeaderText>
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >

                <S.CardContainer>
                    <S.CardBorder>
                        <S.CardForm>
                            <S.CardText>Sugestão de valor:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Tipo:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Medidas:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Cor:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Ar condicionado:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Banheiro:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                    </S.CardBorder>
                </S.CardContainer>

                <S.CardContainer>
                    <S.CardBorder>
                        <S.CardImage source={FotoContainer} />
                    </S.CardBorder>
                </S.CardContainer>



            </S.Content>
        </S.Container>
    )
}

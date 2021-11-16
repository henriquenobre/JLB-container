import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import IconTriangulo from '../../assets/IconTriangulo.png';

export function Notificacoes({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.HeaderIcon style={{ height: 50, width: 50, marginLeft: 5, marginTop: 80 }} source={IconTriangulo} />
                <S.Tittle>Notificações</S.Tittle>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} style={{ marginRight: 15 }} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >
                <S.CardTittle>Vencimento de Mensalidade</S.CardTittle>
                <S.CardContainer>
                    <S.CardForm>
                        <S.CardText>Container n°1:                                   08/12/2021</S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                    <S.CardText>Container n°2:                                   08/12/2021</S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                    <S.CardText style={{color:'#ff9100'}}>Container n°5:                                   13/12/2021</S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                    <S.CardText style={{color:'#ff9100'}}>Container n°10:                                 14/12/2021</S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                    <S.CardText></S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                    <S.CardText></S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                </S.CardContainer>

                <S.CardTittle>Vencimento de contrato</S.CardTittle>
                <S.CardContainer>
                    <S.CardForm>
                    <S.CardText>Container n°3:                                   08/12/2021</S.CardText>
                    </S.CardForm>
                    <S.CardForm>
                        <S.CardText></S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    <S.CardForm>
                        <S.CardText></S.CardText>
                        <S.CardIput />
                    </S.CardForm>
                    
                </S.CardContainer>


            </S.Content>
        </S.Container>
    )
}

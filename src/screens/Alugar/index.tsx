import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import Number1 from '../../assets/Number1.png'

export function Alugar({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>
            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={Number1} />
                    <S.HeaderText>Container n°1-Alugar</S.HeaderText>
                </S.IconNavigation>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
            </S.HeaderLogo>

            <S.Content >
                <S.CardTittle>Informações de pagamento</S.CardTittle>
                <S.CardContainer>
                        <S.CardForm>
                            <S.CardText>Mensalidade:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Início:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Pagamento:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                </S.CardContainer>

                <S.CardTittle>Dados do cliente</S.CardTittle>
                <S.CardContainer>
                        <S.CardForm>
                            <S.CardText>Nome:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>CPF/CNPJ:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Data de nascimento:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>CEP:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Endereço:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Bairro:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Cidade:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Telefone:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Email:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                </S.CardContainer>

                <S.CardTittle>Localização do Container</S.CardTittle>
                <S.CardContainer>
                        <S.CardForm>
                            <S.CardText>Responsável:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>CEP:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Endereço:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Bairro:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Cidade:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                        <S.CardForm>
                            <S.CardText>Telefone:</S.CardText>
                            <S.CardIput />
                        </S.CardForm>
                </S.CardContainer>

            </S.Content>
        </S.Container>
    )
}

import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.jpeg';
import IconLogo from '../../assets/IconLogo.jpeg'
import IconFunil from '../../assets/IconFunil.jpeg'
import NumberContainer from '../../assets/NumberContainer.jpeg'

export function Container3({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} />
                </S.IconNavigation>
                <S.HeaderIcon source={IconLogo} />
                <S.HeaderIcon source={IconFunil} />
            </S.HeaderLogo>


            <S.Content >
                <S.ContainerText>
                    <S.Tittle>Containers - 3 Metros</S.Tittle>
                </S.ContainerText>
                <S.CardContainer onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={NumberContainer} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Disponível</S.CardStatusText>
                        <S.CardStatusBox />
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={NumberContainer} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Disponível</S.CardStatusText>
                        <S.CardStatusBox />
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={NumberContainer} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Disponível</S.CardStatusText>
                        <S.CardStatusBox />
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={NumberContainer} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Disponível</S.CardStatusText>
                        <S.CardStatusBox />
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={NumberContainer} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Disponível</S.CardStatusText>
                        <S.CardStatusBox />
                    </S.CardStatus>
                </S.CardContainer>



            </S.Content>
        </S.Container>
    )
}

import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.jpeg';
import IconLogo from '../../assets/IconLogo.png'
import IconFunil from '../../assets/IconFunil.jpeg'
import Number1 from '../../assets/Number1.png'
import Number2 from '../../assets/Number2.png'
import Number3 from '../../assets/Number3.png'
import Number4 from '../../assets/Number4.png'
import Number5 from '../../assets/Number5.png'
import { useEffect } from 'react';

export function Container6({ route, navigation }) {
    const [text, setText] = useState('');
    const { id } = route.params;

    return (
        <S.Container>

            <S.HeaderLogo>
                <S.IconNavigation style={{paddingLeft: 10}} onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} style={{width: 50,height:50, marginTop: 65}} />
                </S.IconNavigation>
                <S.HeaderIcon source={IconLogo} />
                <S.HeaderIcon style={{width: 50,height:50, marginTop: 65, marginRight:15}} source={IconFunil} />
            </S.HeaderLogo>


            <S.Content >
                <S.ContainerText>
                    <S.Tittle>Containers - 6 Metros</S.Tittle>
                </S.ContainerText>
                <S.CardContainer onPress={() => navigation.navigate('ContainerOptions')}>
                    <S.IconNumber source={Number1} />
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
                    <S.IconNumber source={Number2} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Indisponível</S.CardStatusText>
                        <S.CardStatusBox style={{backgroundColor:"red"}}/>
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number3} />
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
                    <S.IconNumber source={Number4} />
                    <S.CardContainerText>
                        <S.CardTittle>Escritório</S.CardTittle>
                        <S.CardSubTittle>c/ banheiro</S.CardSubTittle>
                        <S.CardSubTittle>c/ ar condicionado</S.CardSubTittle>
                    </S.CardContainerText>
                    <S.CardStatus>
                        <S.CardStatusText>Indisponível</S.CardStatusText>
                        <S.CardStatusBox style={{backgroundColor:"red"}}/>
                    </S.CardStatus>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number5} />
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

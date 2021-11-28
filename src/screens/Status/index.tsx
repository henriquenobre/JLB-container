import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import StatusIcon from '../../assets/status.png'
import Number1 from '../../assets/Number1.png'
import Number2 from '../../assets/Number2.png'
import Number3 from '../../assets/Number3.png'
import Number4 from '../../assets/Number4.png'
import Number5 from '../../assets/Number5.png'
import Number10 from '../../assets/Number10.png'
import { useEffect } from 'react';

export function Status({ route, navigation }) {
    const [text, setText] = useState('');
    const { id } = route.params;

    return (
        <S.Container>

            <S.HeaderLogo>
                <S.HeaderIcon style={{ height: 100, width:100, marginLeft: -20, marginTop: 15 }} source={StatusIcon} />
                <S.Tittle>Status Container</S.Tittle>
                <S.IconNavigation style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} style={{ marginRight: 15 }} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >

                <S.CardContainer>
                    <S.IconNumber source={Number1} />
                    <S.CardContainerText>
                        <S.CardTittle>Alugado - fatura: 08/12/2021 </S.CardTittle>
                        <S.CardSubTittle>Encerramento: não informado</S.CardSubTittle>
                    </S.CardContainerText>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number2} />
                    <S.CardContainerText>
                        <S.CardTittle>Alugado - fatura: 08/12/2021 </S.CardTittle>
                        <S.CardSubTittle>Encerramento: 10/06/2022</S.CardSubTittle>
                    </S.CardContainerText>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number3} />
                    <S.CardContainerText>
                        <S.CardTittle>Disponível</S.CardTittle>
                   
                    </S.CardContainerText>
                    
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number4} />
                    <S.CardContainerText>
                        <S.CardTittle>Alugado - fatura: 13/12/2021 </S.CardTittle>
                        <S.CardSubTittle>Encerramento: 15/01/2022</S.CardSubTittle>
                    </S.CardContainerText>
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number5} />
                    <S.CardContainerText>
                        <S.CardTittle>Disponível</S.CardTittle>
                        
                    </S.CardContainerText>
                    
                </S.CardContainer>

                <S.CardContainer>
                    <S.IconNumber source={Number10} />
                    <S.CardContainerText>
                        <S.CardTittle>Disponível</S.CardTittle>
                        
                    </S.CardContainerText>
                   
                </S.CardContainer>



            </S.Content>
        </S.Container>
    )
}

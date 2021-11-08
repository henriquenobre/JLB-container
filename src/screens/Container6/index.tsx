import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.jpeg';
import IconLogo from '../../assets/IconLogo.jpeg'
import IconFunil from '../../assets/IconFunil.jpeg'
import NumberContainer from '../../assets/NumberContainer.jpeg'

export function Container({navigation}){
  const [text, setText] = useState('');


  return(
    <S.Container>

      <S.HeaderLogo>
        <S.HeaderIcon source={IconMenu} />
        <S.HeaderIcon source={IconLogo} />
        <S.HeaderIcon source={IconFunil} />
      </S.HeaderLogo>


      <S.Content >
          <S.ContainerText>
              <S.Tittle>Containers - 6 Metros</S.Tittle>
          </S.ContainerText>
        <S.CardContainer>
            <S.IconNumber source={NumberContainer} />
        </S.CardContainer>

      </S.Content>
    </S.Container>
  )
}

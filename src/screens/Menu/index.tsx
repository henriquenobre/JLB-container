import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.jpeg'
import IconCorrect from '../../assets/IconCorrect.jpeg'
import * as S from './style';

export function Menu(){
  const [text, setText] = useState('');


  return(
    <S.Container>

      <S.Image
        source={IllustrationImg}
        resizeMode="stretch"
      />

      <S.Content >
        <S.CardMenu>
            <S.TextCard>Status</S.TextCard>
            <S.IconImage 
            source={IconCorrect}
            />
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Containers 6M</S.TextCard>
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Containers 3M</S.TextCard>
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Calendário</S.TextCard>
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Localização</S.TextCard>
        </S.CardMenu>

      </S.Content>
    </S.Container>
  )
}

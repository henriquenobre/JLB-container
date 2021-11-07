import React, { useState } from 'react';
import IllustrationImg from '../../assets/illustration.jpeg'
import StatusIcon from '../../assets/status.png'
import Container3Icon from '../../assets/container3.png'
import Container6Icon from '../../assets/container6.png'
import CalendarioIcon from '../../assets/calendario.png'
import LocalizacaoIcon from '../../assets/localizacao.png'
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
        <S.CardMenu activeOpacity={0.5}>
            <S.TextCard >Status</S.TextCard>
            <S.IconImage 
            source={StatusIcon}
            />
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Containers 6M</S.TextCard>
            <S.IconImage 
            source={Container3Icon}
            />
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Containers 3M</S.TextCard>
            <S.IconImage 
            source={Container6Icon}
            />
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Calendário</S.TextCard>
            <S.IconImage 
            source={CalendarioIcon}
            />
        </S.CardMenu>

        <S.CardMenu>
            <S.TextCard>Localização</S.TextCard>
            <S.IconImage 
            source={LocalizacaoIcon}
            />
        </S.CardMenu>

      </S.Content>
    </S.Container>
  )
}

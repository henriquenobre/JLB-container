import React, { useState } from 'react';
import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png'
import * as S from './style';

export function SignIn(){
  const [text, setText] = useState('');


  return(
    <S.Container>

      <S.Image
        source={IllustrationImg}
        resizeMode="stretch"
      />

      <S.Content >
        <S.Title >
          Conecte-se {'\n'}
          e organize suas{'\n'}
          jogatinas
        </S.Title>

        <S.SubTitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </S.SubTitle>

        <ButtonIcon
        title="Entrar com Discord"
        activeOpacity={0.5}/>
      </S.Content>
    </S.Container>
  )
}

import React, { useState } from 'react';
import * as S from './style';
import IconMenu from '../../assets/IconMenu.png';
import IconTriangulo from '../../assets/IconTriangulo.png';
import LocalizacaoImg from '../../assets/localizacao.jpeg';


export function Localizacao({ navigation }) {
    const [text, setText] = useState('');


    return (
        <S.Container>

            <S.HeaderLogo>
                <S.HeaderIcon style={{ height: 50, width: 50, marginLeft: 5, marginTop: 80 }} source={IconTriangulo} />
                <S.Tittle>Localização</S.Tittle>
                <S.IconNavigation onPress={() => navigation.navigate('Menu')}>
                    <S.HeaderIcon source={IconMenu} style={{ marginRight: 15 }} />
                </S.IconNavigation>
            </S.HeaderLogo>


            <S.Content >
                <S.LocImg source={LocalizacaoImg} />
            </S.Content>
        </S.Container>
    )
}

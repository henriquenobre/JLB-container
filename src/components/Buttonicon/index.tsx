import React from "react";
import{
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityBase,
    TouchableOpacityProps
} from  'react-native'

import * as S from "./style2";
import DiscordImg from '../../assets/discord.png'
import { styles } from "./style";


type Props = TouchableOpacityProps & {
    title?:string;
}

export function ButtonIcon({ title, ...rest }: Props){
    return(
        <S.Container
        {...rest}
        >
            <S.iconWrapper>
                <S.Icon source={DiscordImg}/>
            </S.iconWrapper>
            <S.Title>
                    {title}
            </S.Title>
        </S.Container>
    )
}

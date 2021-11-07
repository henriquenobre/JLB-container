import React from "react";
import{ TouchableOpacityProps } from  'react-native'
import * as S from "./style";


type Props = TouchableOpacityProps & {
    title?:string;
}

export function ButtonIcon({ title, ...rest }: Props){
    return(
        <S.Container
        {...rest}
        >
            <S.Title>
                    {title}
            </S.Title>
        </S.Container>
    )
}

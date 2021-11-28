import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #e6e8e5;
`;

export const HeaderLogo = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    width: 100%;
    height: 100px;
`

export const HeaderIcon = styled.Image`
    height: 25px;
    width: 25px;
    margin-top: -7px;
`
export const IconNavigation = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`

export const IconNumber = styled.Image`
    height: 150px;
    width: 150px;
    margin-left: -40px;
`

export const Tittle = styled.Text`
    color: blue;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
    margin-left: -30px;
`

export const HeaderText = styled.Text`
    margin-left: -40px;
    color: blue;
    font-size: 24px;
    font-weight: bold;
`

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 85px;
`
export const LocImg = styled.Image`
    margin-left: -400px;
`





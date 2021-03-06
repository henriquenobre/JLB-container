import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    justify-content: flex-start;
    align-items: center;
    background-color: #e6e8e5;
`;

export const HeaderLogo = styled.View`
    display: flex;
    flex-direction: row;
    background: white;
    width: 100%;
    height: 100px;
`

export const HeaderIcon = styled.Image`
    height: 25px;
    width: 25px;
    margin-left: 70px;
    margin-top: -10px;
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

export const HeaderText = styled.Text`
    margin-left: -5px;
    margin-top: -5px;
    color: blue;
    font-size: 24px;
    font-weight: bold;
`

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`


export const CardContainer = styled.TouchableOpacity`    
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 320px;
  background-color: #fbfbfb;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 20px;
`

export const CardIcon = styled.Image`
   height: 130px;
   width: 100px;
`

export const CardTittle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #ff9100;
`






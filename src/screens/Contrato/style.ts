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
    height: 150px;
`

export const HeaderIcon = styled.Image`
   
`
export const IconNavigation = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`

export const IconNumber = styled.Image`
    height: 60px;
    width: 60px;
`

export const HeaderText = styled.Text`
    margin-left: 10px;
    color: blue;
    font-size: 24px;
    font-weight: bold;
`

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const CardContainer = styled.View`    
  flex-direction: row;
  align-items: center;
  width: 320px;
  background-color: #fbfbfb;
  border-radius: 8px;
  margin-top: 20px;
`

export const CardIcon = styled.Image`
   height: 130px;
   width: 100px;
`

export const CardTextDisplay = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardTittle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #ff9100;
`

export const SubTittle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #e6e8e5;
`

export const CardObs = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 75px;
    padding-bottom: 200px;
`

export const CardInput = styled.TextInput`
`






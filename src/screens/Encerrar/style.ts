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
    height: 150px;
    width: 150px;
    margin-left: -40px;
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
    margin-top: 10px;
`

export const CardTittle = styled.Text`
    margin-top: 180px;
    font-size: 22px;
    font-weight: bold;
    color: #ff9100;
`


export const CardContainer = styled.View`    
  flex-direction: column;
  width: 320px;
  background-color: white;
  margin-top: 10px;
`

export const CardForm = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #e6e8e5;
`

export const CardText = styled.Text`
    margin-left: 5px;
    font-size: 15px;
    font-weight: bold;
    color: blue;
    margin-bottom: 2px;
`

export const CardIput = styled.TextInput`
    height: 20px;
    width: 300px;
    margin-left: 10px;
`








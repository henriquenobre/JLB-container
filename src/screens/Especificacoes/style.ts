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
    margin-top: 10px;
`


export const CardContainer = styled.View`    
  flex-direction: row;
  align-items: center;
  height: 250px;
  width: 320px;
  background-color: white;
  border-radius: 8px;
  padding-left: 5px;
  margin-top: 20px;
`
export const CardBorder = styled.View`
    display: flex;
    flex-direction: column;
    height: 240px;
    width: 310px;
    border: 10px solid #e6e8e5;
    border-radius: 8px;
`

export const CardForm = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    border-bottom-width: 2px;
    border-bottom-color: #e6e8e5;
`

export const CardText = styled.Text`
    font-size: 17px;
    color: blue;
    margin-left: 10px;
    margin-bottom: 2px;
`

export const CardIput = styled.TextInput`
    height: 20px;
    width: 100%;
    margin-left: 10px;
`

export const CardImage = styled.Image`
    margin-top: 50px;
    margin-left: 20px;
`







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
    justify-content: space-between;
    background: white;
    width: 100%;
    height: 150px;
`

export const HeaderIcon = styled.Image`
    height: 35px;
    width: 35px;
    margin-top: 80px;
`
export const IconNavigation = styled.TouchableOpacity``

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const ContainerText = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #ff9100;
    border-radius: 8px;
    padding: 5px;
`

export const Tittle = styled.Text`
    color: blue;
    font-size: 24px;
    font-weight: bold;
    margin-top: 80px;
`

export const CardContainer = styled.TouchableOpacity`    
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 320px;
  background-color: #fbfbfb;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
`
export const CardContainerText = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: -40px;
`

export const CardTittle = styled.Text`
    font-weight: bold;
`

export const CardSubTittle = styled.Text``

export const CardStatus = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    margin-bottom: 50px;
`

export const CardStatusText = styled.Text`
    font-size: 10px;
`

export const CardStatusBox = styled.View`
    width: 10px;
    height: 10px;
    margin-left: 5px;
    background: green;
`

export const IconNumber = styled.Image`
    height: 150px;
    width: 150px;
    margin-left: -50px;
`


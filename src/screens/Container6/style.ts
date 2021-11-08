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
   margin-top: 40px;
`

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
    font-size: 32px;
    font-weight: bold;
`

export const CardContainer = styled.TouchableOpacity`    
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 280px;
  background-color: #fbfbfb;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
`


export const IconNumber = styled.Image`
    height: 60px;
    width: 60px;
`


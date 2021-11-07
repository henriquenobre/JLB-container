import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
    background-color: #e6e8e5;
`;

export const Image = styled.Image`
  width: 200px;
  height: 160px;
  margin-top: -50px;
`

export const Content = styled.View`
  justify-content: center;
    align-items: center;
    margin-top: 100px;
`
export const CardMenu = styled.TouchableOpacity`    
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 240px;
  background-color: #fbfbfb;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
`

export const TextCard = styled.Text`
    color: #004aad;
    font-size: 24px;
`
export const IconImage = styled.Image`
    height: 80px;
    width: 50px;
    margin-right: 10px;
`


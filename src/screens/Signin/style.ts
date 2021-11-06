import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`;

export const Image = styled.Image`
  width: 100%;
  height: 300;
`
export const Title = styled.Text`
  color: aliceblue;
  text-align: center;
  margin-bottom: 16;
  font-family: 'Open Sans';
  line-height: 25;
  font-size: 32px;
`

export const Content = styled.View`
  justify-content: center;
    align-items: center;
    margin-top: 15;
`
export const InputField = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: lightgoldenrodyellow;
  border-radius: 15px;
  padding-left: 10;
  margin-top: 10px;
`

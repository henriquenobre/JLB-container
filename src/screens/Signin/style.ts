import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;

    justify-content: center;
    align-items: center;
    background-color: #e6e8e5;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: 50px;
`
export const Title = styled.Text`
  color: #ff9100;
  text-align: center;
  font-family: sans-serif;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`

export const Content = styled.View`
  justify-content: center;
    align-items: center;
`

export const InputField = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #edcc8f;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 10px;
`
export const SubTitle = styled.Text`
  margin-top: 20px;
  color: black;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
`
export const containerAlert = styled.View`
    width: 300px;
    height: 60px;
    flex-direction: row;
    margin-top: 20px; 
    padding-left: 10px;
    color: #bdbdbd;
    font-size: 15px;
`

export const TextWarning = styled.Text`
    margin-left: 15px;
    color: #4d5156;
`

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
  width: 300px;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: #004aad;
`

export const Title = styled.Text`
  flex: 1;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`
export const iconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  /* border-right: 1; */
  /* border-end-end-radius: 1; */
  background-color: red;
`


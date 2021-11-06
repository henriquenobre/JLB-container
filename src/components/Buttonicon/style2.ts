import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56;
  background-color: aliceblue;
  border-radius: 8;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  color: aliceblue;
  font-size: 15;
  text-align: center;
`
export const iconWrapper = styled.View`
  width: 56;
  height: 56;
  justify-content: center;
  align-items: center;
  /* border-right: 1; */
  /* border-end-end-radius: 1; */
  background-color: red;
`
export const Icon = styled.Image`
  width: 24;
  height: 18;
`

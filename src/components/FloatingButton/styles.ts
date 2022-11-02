import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Container = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  position: absolute;
  bottom: 5%;
  right: 0px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 23,
  color: theme.text,
}))``;

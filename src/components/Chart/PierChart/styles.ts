import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Container = styled.View`
  width: 100%;
  height: auto;
  padding-top: 20px;
`;

export const ContainerChart = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerLegends = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;

export const ContainerData = styled.View``;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 23,
  color: theme.text,
}))``;

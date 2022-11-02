import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.activeTab};
`;

export const Container = styled.View`
  height: 58px;
  flex-direction: row;
  padding-bottom: 15px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.activeTab};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.textWhite};
  font-size: 16px;
  font-weight: bold;
`;

export const Icon = styled(AntDesign).attrs(props => ({
  color: props.theme.textWhite,
}))``;

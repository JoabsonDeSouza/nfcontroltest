import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Container = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.activeTab};
  border-radius: 16px;
  margin: 5px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.textWhite};
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 27,
  color: theme.textWhite,
}))``;

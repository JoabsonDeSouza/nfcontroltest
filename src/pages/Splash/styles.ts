import styled from 'styled-components/native';
import { ActivityIndicator, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  height: ${height}px;
  width: ${width}px;
  z-index: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
`;

export const Loading = styled(ActivityIndicator).attrs(props => ({
  color: props.theme.activeTab,
  size: 'large',
}))`
  margin-top: 20px;
`;

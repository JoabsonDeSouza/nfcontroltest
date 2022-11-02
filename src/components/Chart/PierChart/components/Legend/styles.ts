import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Container = styled.View`
  width: 100%;
  height: auto;
`;

export const ContainerChart = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerLegends = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

interface TextProps {
  size?: number;
  white: boolean;
}

export const Text = styled.Text<TextProps>`
  color: ${({ theme, white }) => (white ? '#fff' : theme.text)};
  font-size: ${({ size }) => size || 12}px;
  text-align: center;
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 23,
  color: theme.text,
}))``;

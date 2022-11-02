import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 45%;
  background-color: ${({ theme }) => theme.primary};
`;

export const ContainerData = styled.View`
  width: 100%;
  height: 60%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  bottom: 0px;
  padding-left: 40px;
  padding-top: 30px;
  padding-right: 40px;
  shadow-opacity: 0.75;
  shadow-radius: 25px;
  shadow-color: ${({ theme }) => theme.activeTab};
  shadow-offset: 0px 0px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  underlineColorAndroid: 'transparent',
})`
  width: 100%;
  height: 70px;
  color: ${({ theme }) => theme.text};
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-bottom-color: #e1e1e1;
  border-bottom-width: 1px;
`;

export const ContainerCheck = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

interface TextProps {
  size?: number;
  bold?: boolean;
  color?: boolean;
  underline?: boolean;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ size }) => size || 13}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, color }) => (color ? theme.activeTab : theme.textHeader)};
  padding-bottom: 5px;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-decoration-color: ${({ theme }) => theme.activeTab};
`;

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.activeTab};
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 25%;
  right: 30px;
`;

import styled from 'styled-components/native';

export const AvatarImg = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 70px;
  width: 70px;
  border-radius: 35px;
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const AvatarContainer = styled.View`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: ${`${getRandomColor()}`};
  align-items: center;
  justify-content: center;
`;

export const Letter = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
`;

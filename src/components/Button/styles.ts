import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ bottom: string }>`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.activeTab};
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${({ bottom }) => bottom || '25%'};
  right: 30px;
`;

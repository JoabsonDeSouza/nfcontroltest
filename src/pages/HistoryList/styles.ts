import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
`;

export const ContainerHeader = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.activeTab};
  padding: 10px;
`;

export const Columns = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.textWhite};
  font-size: 12px;
`;

interface ColumnsStatusProps {
  color: string;
}

export const Status = styled.View<ColumnsStatusProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
`;

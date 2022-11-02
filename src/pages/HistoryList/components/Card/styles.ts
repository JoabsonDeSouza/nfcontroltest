import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-color: ${({ theme }) => theme.activeTab};
  border-width: 1px;
`;

export const Columns = styled.View`
  flex: 1;
  align-items: center;
`;

interface ColumnsStatusProps {
  color: string;
}

export const Status = styled.View<ColumnsStatusProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

import styled from 'styled-components/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  padding-top: 10px;
  color: ${({ theme }) => theme.text};
`;

export const ContainerHeader = styled.SafeAreaView`
  flex: 1;
  padding-top: 25px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  margin-bottom: 20px;
`;

export const ContainerItems = styled.View`
  flex: 4;
  height: 100%;
  width: 100%;
  padding-left: 10px;
  margin-top: 10px;
  padding-right: 10px;
  background-color: ${({ theme }) => theme.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.background};
`;

interface ItemContainer {
  isActive: boolean;
}

export const Icon = styled<ItemContainer>(FontAwesome).attrs(
  ({ theme, isActive }) => ({
    size: 17,
    color: isActive ? theme.textWhite : theme.text,
  }),
)`
  margin-right: 10px;
`;

export const IconLogin = styled(Entypo).attrs(({ theme }) => ({
  size: 17,
  color: theme.text,
}))`
  margin-right: 10px;
`;

export const ItemText = styled.Text<ItemContainer>`
  color: ${({ isActive, theme }) => (isActive ? theme.textWhite : theme.text)};
`;

export const ItemContainer = styled.TouchableOpacity<ItemContainer>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.activeTab : theme.background};
  padding-left: 10px;
  border-radius: 3px;
  padding: 5px;
  height: 45px;
`;

export const ContainerListItems = styled.View``;

export const ContainerPreferences = styled.View`
  margin-top: 7%;
  border-top-width: 0.5px;
  width: 100%;
  padding-bottom: 60px;
  border-color: ${({ theme }) => theme.backgroundButton};
`;

export const ContainerTheme = styled.View`
  padding-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
`;

export const ContainerUser = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
`;

export const TextVersion = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const ContainerAppVersion = styled.View`
  width: 100%;
  margin-left: 20px;
`;

export const ContainerIconLogin = styled.View`
  margin-top: 5px;
  flex-direction: row;
`;

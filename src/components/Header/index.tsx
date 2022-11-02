import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Container, Text, SafeArea, Icon } from './styles';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<any>();
  const drawerStatus = useDrawerStatus();

  const handlerDrawer = () => {
    if (drawerStatus === 'open') {
      navigation.closeDrawer();
      return;
    }
    navigation.openDrawer();
  };

  return (
    <>
      <SafeArea />
      <Container>
        <Icon
          name="menuunfold"
          size={24}
          onPress={handlerDrawer}
          style={{ position: 'absolute', left: 10 }}
        />
        {!!title && <Text>{title}</Text>}
      </Container>
    </>
  );
};

export default Header;

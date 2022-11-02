import React from 'react';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { useApp } from '../../context/app';

import { Container, Text } from './styles';

const Settings = () => {
  const { changeTheme } = useApp();

  return (
    <>
      <Header title="Settings" />
      <Container>
        <TouchableOpacity onPress={() => changeTheme()}>
          <Text>Alterar Tema</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Settings;

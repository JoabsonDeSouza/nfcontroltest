import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ADD_NEW_NOTE, ADD_NEW_EXPENSE } from '../../routes/CustomDrawer/icons';

import { FloatingAction, IActionProps } from 'react-native-floating-action';

const actions: IActionProps[] = [
  {
    text: 'Nova Nota',
    icon: '',
    name: ADD_NEW_NOTE,
    position: 2,
    color: '#551FA4',
  },
  {
    text: 'Nova Despesa',
    icon: '',
    name: ADD_NEW_EXPENSE,
    position: 1,
    color: '#551FA4',
  },
];

const FloatingButton = () => {
  const navigation = useNavigation<any>();

  const onPress = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <FloatingAction
      color="#551FA4"
      animated
      actionsPaddingTopBottom={10}
      buttonSize={70}
      position="right"
      actions={actions}
      onPressItem={name => onPress(name || '')}
    />
  );
};

export default FloatingButton;

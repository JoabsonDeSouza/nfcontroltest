import React from 'react';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { ADD_NEW_EXPENSE } from '../../routes/CustomDrawer/icons';

import { Container, Text } from './styles';

const AddNewExpense = () => {
  return (
    <>
      <Header title={ADD_NEW_EXPENSE} />
      <Container>
        <TouchableOpacity>
          <Text>{ADD_NEW_EXPENSE}</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default AddNewExpense;

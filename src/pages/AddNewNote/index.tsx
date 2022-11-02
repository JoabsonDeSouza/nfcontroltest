import React from 'react';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { ADD_NEW_NOTE } from '../../routes/CustomDrawer/icons';

import { Container, Text } from './styles';

const AddNewNote = () => {
  return (
    <>
      <Header title={ADD_NEW_NOTE} />
      <Container>
        <TouchableOpacity>
          <Text>{ADD_NEW_NOTE}</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default AddNewNote;

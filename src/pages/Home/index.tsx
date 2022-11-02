import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Card from './components/Card';

import { Container } from './styles';
import FloatingButton from '../../components/FloatingButton';
import PierChart from '../../components/Chart/PierChart';
import { dataChart, menu } from './mocks';

const Home = () => {
  const navigation = useNavigation<any>();

  const handleNavigate = (page: string) => {
    navigation.navigate(page);
  };

  return (
    <>
      <Header title="Home" />
      <Container>
        <PierChart title="Faturamento Total" data={dataChart} />
        <FlatList
          style={{ flex: 1 }}
          scrollEnabled={false}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            paddingTop: '15%',
          }}
          data={menu}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              icon={item.icon}
              onPress={() => handleNavigate(item.page)}
            />
          )}
        />
        <FloatingButton />
      </Container>
    </>
  );
};

export default Home;

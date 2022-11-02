import { Dimensions, FlatList } from 'react-native';
import Legend from '../../components/Chart/PierChart/components/Legend';
import Header from '../../components/Header';
import { LIST_HISTORY } from '../../routes/CustomDrawer/icons';
import Card from './components/Card';
import { list } from './mock';

import {
  Container,
  Columns,
  ContainerHeader,
  TextHeader,
  Text,
} from './styles';

export interface Data {
  id: number;
  client: string;
  date: string;
  value: string;
  status: 'confirmed' | 'canceled' | 'not_confirmed' | 'await';
}

const HistoryList = () => {
  return (
    <>
      <Header title={LIST_HISTORY} />
      <Container>
        <FlatList
          data={list}
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            width: Dimensions.get('screen').width - 20,
          }}
          ListHeaderComponent={
            <ContainerHeader>
              <Columns>
                <TextHeader>Cliente</TextHeader>
              </Columns>
              <Columns>
                <TextHeader>Data</TextHeader>
              </Columns>
              <Columns>
                <TextHeader>Valor</TextHeader>
              </Columns>
              <Columns>
                <TextHeader>Status</TextHeader>
              </Columns>
            </ContainerHeader>
          }
          ListFooterComponent={
            <ContainerHeader>
              <Legend color="green" name="Confirmado" size={10} white />
              <Legend color="red" name="Cancelado" size={10} white />
              <Legend color="lightblue" name="Aguardando" size={10} white />
              <Legend color="orange" name="Não confirmado" size={10} white />
            </ContainerHeader>
          }
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Card item={item} />}
        />
      </Container>
    </>
  );
};

export default HistoryList;

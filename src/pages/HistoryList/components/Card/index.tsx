import { Data } from '../../index';

import { Container, Columns, Text, Status } from './styles';

interface CardProps {
  item: Data;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'green';

    case 'not_confirmed':
      return 'lightblue';

    case 'await':
      return 'orange';

    default:
      return 'red';
  }
};

const Card = ({ item }: CardProps) => {
  return (
    <Container>
      <Columns>
        <Text>{item.client}</Text>
      </Columns>
      <Columns>
        <Text>{item.date}</Text>
      </Columns>
      <Columns>
        <Text>{item.value}</Text>
      </Columns>
      <Columns>
        <Status color={getStatusColor(item.status)} />
      </Columns>
    </Container>
  );
};

export default Card;

import React from 'react';

import { Container, Text, Icon } from './styles';

interface CardProps { 
  title: string;
  icon: string;
  onPress: () => void;
};

const Card = ({ title, icon, onPress }: CardProps) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} />
      <Text>{title}</Text>
    </Container>
  );
};

export default Card;

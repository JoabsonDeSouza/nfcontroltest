import { View, StyleSheet } from 'react-native';

import { Text } from './styles';

interface LegendProps {
  name: string;
  color: string;
  size?: number;
  white?: boolean;
}

function Legend({ name, color, size, white = false }: LegendProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.colorContainer, { backgroundColor: color }]}></View>
      <View style={styles.textContainer}>
        <Text size={size} white={white}>
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  colorContainer: {
    width: 10,
    height: 10,
  },
  textContainer: {
    paddingLeft: 8,
  },
});

export default Legend;

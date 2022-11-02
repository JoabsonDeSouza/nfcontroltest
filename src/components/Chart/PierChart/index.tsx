import { StyleSheet } from 'react-native';

import { PieChart } from 'react-native-svg-charts';
import Legend from './components/Legend';
import {
  Container,
  Text,
  ContainerChart,
  ContainerLegends,
  ContainerData,
} from './styles';

export interface Data {
  id: number;
  color: string;
  value: number;
  description: string;
}

interface PierChartProps {
  title: string;
  data: Data[];
}

const getPieData = (data: Data[]) => {
  return data.map((item, index) => ({
    value: item.value,
    svg: {
      fill: item.color,
    },
    key: `pie-${index}`,
  }));
};

function PierChart({ title, data }: PierChartProps) {
  return (
    <Container>
      <Text>{title}</Text>

      <ContainerData>
        <ContainerChart>
          <PieChart style={{ height: 150 }} data={getPieData(data)} />
        </ContainerChart>

        <ContainerLegends>
          {data.map(({ id, description, color }: Data) => {
            return <Legend key={id} name={description} color={color} />;
          })}
        </ContainerLegends>
      </ContainerData>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  legendContainer: {
    marginTop: 20,
  },
});

export default PierChart;

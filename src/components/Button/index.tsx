import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
import { MaterialIcon } from '../Icon';

import { Container } from './styles';

interface Props {
  onPress: () => void;
  icon?: string;
  loading?: boolean;
  bottom?: string;
}

const Button = ({ onPress, icon, loading, bottom }: Props) => {
  return (
    <Container onPress={onPress} disabled={loading} bottom={bottom}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={'large'} />
      ) : (
        <MaterialIcon
          name={icon || 'arrow-forward'}
          size={30}
          color={colors.white}
        />
      )}
    </Container>
  );
};

export default Button;

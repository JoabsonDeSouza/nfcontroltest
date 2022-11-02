import MIcon from '@expo/vector-icons/MaterialIcons';
import MFontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const MaterialIcon = ({ size, name, color }: any) => {
  return <MIcon name={name} size={size} color={color} />;
};

export const FontAwesome = ({ size, name, color }: any) => {
  return <MFontAwesome name={name} size={size} color={color} />;
};

export const MatComIcons = ({ size, name, color }: any) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

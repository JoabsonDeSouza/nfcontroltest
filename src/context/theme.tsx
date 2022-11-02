import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import { useApp } from './app';
import { Props } from './types';

const Theme = ({ children }: Props) => {
  const { theme } = useApp();
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;

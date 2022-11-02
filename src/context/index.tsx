import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import { AppProvider } from './app';
import { Props } from './types';

const ContextProvider = ({ children }: Props) => (
  <ToastProvider>
    <AppProvider>{children}</AppProvider>
  </ToastProvider>
);

export default ContextProvider;

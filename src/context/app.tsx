import React, { createContext, useContext, useEffect, useState } from 'react';

import useAppTheme from '../hooks/useAppTheme';
import { useToast } from 'react-native-toast-notifications';
import useAuth from '../hooks/useAuth';
import { Props } from './types';

const AppContext = createContext<AppContextData>({} as AppContextData);

interface AppContextData {
  theme: 'dark' | 'light';
  changeTheme(): void;
  loading: boolean;
  showToast(message: string, type: 'success' | 'danger'): void;
  userLogged: boolean | undefined;
  logOut(): void;
  logIn(checked: boolean): void;
}

const AppProvider = ({ children }: Props) => {
  const [currentTheme, updateCurrentTheme] = useAppTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [userLogged, setUserLogged] = useState<boolean | undefined>();
  const { save, logOut: authLogOut, logged } = useAuth();

  const toast = useToast();

  async function changeTheme(): Promise<void> {
    updateCurrentTheme();
  }

  function showToast(message: string, type: 'success' | 'danger'): void {
    console.log(message);
    toast.show(message, {
      type,
      duration: 3000,
      style: {
        marginBottom: 50,
      },
    });
  }

  function logOut() {
    setUserLogged(false);
    authLogOut();
  }

  function logIn(checked: boolean) {
    if (checked) save();
    setUserLogged(true);
  }

  useEffect(() => {
    setUserLogged(logged);
  }, [logged]);

  return (
    <AppContext.Provider
      value={{
        theme: currentTheme,
        changeTheme,
        loading,
        showToast,
        userLogged,
        logOut,
        logIn,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AuthProvider');
  }

  return context;
}

export { AppProvider, useApp };

import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLoginSaved = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_login');
    return jsonValue !== null ? !!JSON.parse(jsonValue) : false;
  } catch (e) {
    return false;
  }
};

const saveLogin = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_login', jsonValue);
  } catch (e) {
    // saving error
  }
};

const useAuth = () => {
  const [logged, setLogged] = useState<boolean | undefined>();

  const save = useCallback(async () => {
    try {
      saveLogin('value');
    } catch (e) {
      setLogged(false);
    }
  }, []);

  const logOut = () => {
    setLogged(false);
    saveLogin('');
  };

  const execute = useCallback(async () => {
    const userLogged = await getLoginSaved();

    if (userLogged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  useEffect(() => {
    execute();
  }, [execute]);
  return { execute, logged, save, logOut };
};

export default useAuth;

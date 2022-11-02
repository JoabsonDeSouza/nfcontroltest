import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useApp } from '../context/app';
import Home from '../pages/Home';
import { RootStackParamList } from './types';
import Settings from '../pages/Settings';
import Splash from '../pages/Splash';
import DrawerCustom from './CustomDrawer';
import {
  ADD_NEW_NOTE,
  ADD_NEW_EXPENSE,
  HOME,
  LIST_HISTORY,
  SETTINGS,
} from './CustomDrawer/icons';
import HistoryList from '../pages/HistoryList';
import AddNewExpense from '../pages/AddNewExpense';
import AddNewNote from '../pages/AddNewNote';
import { StatusBar } from 'expo-status-bar';

const AppStack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<RootStackParamList>();

const RouterDrawer = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerCustom {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen name={HOME} component={Home} />
    <Drawer.Screen name={ADD_NEW_EXPENSE} component={AddNewExpense} />
    <Drawer.Screen name={LIST_HISTORY} component={HistoryList} />
    <Drawer.Screen name={ADD_NEW_NOTE} component={AddNewNote} />
    <Drawer.Screen name={SETTINGS} component={Settings} />
  </Drawer.Navigator>
);

function Routes() {
  const { userLogged } = useApp();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {userLogged ? (
          <>
            <AppStack.Screen name="HomeStack" component={RouterDrawer} />
          </>
        ) : (
          <>
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Register" component={Register} />
          </>
        )}
      </AppStack.Navigator>
    </>
  );
}

export default function App() {
  const { theme } = useApp();

  console.log('theme', theme);
  return (
    <>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

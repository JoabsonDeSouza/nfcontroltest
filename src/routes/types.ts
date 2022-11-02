import {
  LIST_HISTORY,
  HOME,
  SETTINGS,
  LOGIN,
  REGISTER,
  ADD_NEW_NOTE,
  ADD_NEW_EXPENSE,
} from './CustomDrawer/icons';

export type RootStackParamList = {
  [LOGIN]: undefined;
  [REGISTER]: undefined;
  [HOME]: undefined;
  [SETTINGS]: undefined;
  [LIST_HISTORY]: undefined;
  [ADD_NEW_NOTE]: undefined;
  [ADD_NEW_EXPENSE]: undefined;
  HomeStack: undefined;
  StackNewNote: undefined;
};

import { createContext, Dispatch } from 'react';

import { ITheme } from '../type';
import { appTheme } from '../theme';

type ChangeTheme = (theme: ITheme) => ITheme;

export interface IAppState {
  theme: ITheme
  changeTheme: Dispatch<ITheme | ChangeTheme>;
}

/**
 * Application state
 */
export const StateContext = createContext<IAppState>({
  theme: appTheme(),
  changeTheme: x => x,
});

import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';
import { ITheme } from '../type';

const themes = {
  'dark': darkTheme,
  'light': lightTheme,
}

/**
 * Theme provider
 */
export const appTheme = (mode: ITheme['theme'] = 'dark') => {
  return themes[mode];
}

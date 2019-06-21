import { darkTheme } from './dark-theme';
import { blueTheme } from './blue-theme';
import { lightTheme } from './light-theme';
import { ITheme } from '../type';

const themes = {
  dark: darkTheme,
  blue: blueTheme,
  light: lightTheme,
};

/**
 * Theme provider
 */
export const appTheme = (mode: ITheme['theme'] = 'dark') => {
  return themes[mode];
};

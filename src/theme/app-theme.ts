import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';

const themes = {
  'dark': darkTheme,
  'light': lightTheme,
}

/**
 * Theme provider
 */
export const appTheme = (mode: keyof typeof themes = 'dark') => {
  return themes[mode];
}

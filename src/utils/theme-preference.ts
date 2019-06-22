import { ITheme } from '../type';
import { Storage } from './storage';
import { isBrowser } from './is-browser';

const defaultTheme: ITheme['theme'] = 'blue';

export const preferredTheme = (): ITheme['theme'] => {
  if (!isBrowser()) {
    return defaultTheme;
  }

  const isLightModeSystem = matchMedia('(prefers-color-scheme: light)').matches;
  const isDarkModeSystem  = matchMedia('(prefers-color-scheme: dark)').matches;
  const hasPreviousPreference = Storage.getTheme();

  if (hasPreviousPreference) {
    return hasPreviousPreference;
  }
  if (isLightModeSystem) {
    return 'light';
  }
  if (isDarkModeSystem) {
    return 'dark';
  }

  return defaultTheme;
};

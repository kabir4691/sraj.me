import { ITheme } from '../type';
import { Storage } from './storage';

export const preferredTheme = (): ITheme['theme'] => {
  const isLightModeSystem = matchMedia('(prefers-color-scheme: light)').matches;
  const hasPreviousPreference = Storage.getTheme();

  if (hasPreviousPreference) {
    return hasPreviousPreference;
  }
  if (isLightModeSystem) {
    return 'light';
  }

  return 'dark';
}

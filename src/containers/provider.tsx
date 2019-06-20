import React, { useState } from 'react';

import { IAppState, StateContext } from '../state';
import { appTheme } from '../theme';
import { preferredTheme } from '../utils/theme-preference';

interface IProviderProps {
  children: React.ReactElement;
}

/**
 * Root Provider container
 */
export default function Provider({ children }: IProviderProps) {
  const [theme, changeTheme] = useState(getTheme());
  const state = { theme, changeTheme };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}

function getTheme(): IAppState['theme'] {
  const themeMode = preferredTheme();
  const theme = appTheme(themeMode);
  return theme;
}

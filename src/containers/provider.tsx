import React, { useState } from 'react';

import { IAppState, StateContext } from '../state';
import { appTheme } from '../theme';

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
  const theme = appTheme('light');
  return theme;
}

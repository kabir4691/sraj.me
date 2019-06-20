import React from 'react'
import { ITheme } from '../type';
import { appTheme, ThemeContext } from '../theme';

interface IProviderProps {
  children: React.ReactElement
}

interface IProvision {
  theme: ITheme
}

/**
 * Root Provider container
 */
export default function Provider ({ children }: IProviderProps) {
  const props = getProps();
  return (
    <ThemeContext.Provider value={props.theme} >
      {children}
    </ThemeContext.Provider>
  )
}

function getProps (): IProvision {
  const theme = appTheme();
  return {
    theme,
  }
}

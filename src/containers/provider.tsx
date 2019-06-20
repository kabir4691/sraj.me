import React from 'react'
import { ITheme } from '../type';
import { appTheme, ThemeContext } from '../theme';

interface IProviderProps {
  children: React.ReactElement
}

interface IProviderState {
  theme: ITheme
}

/**
 * Root Provider container
 */
export default class Provider extends React.Component<IProviderProps, IProviderState> {
  state = getProps();

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme} >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

function getProps (): IProviderState {
  const theme = appTheme('light');
  return {
    theme,
  }
}

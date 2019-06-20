import React from 'react';
import { appTheme } from './app-theme';

/**
 * Theme context
 */
export const ThemeContext = React.createContext(appTheme())

export { appTheme } from './app-theme';

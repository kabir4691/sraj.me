import React, { memo, useCallback } from 'react';
import styled from '@emotion/styled';

import { ITheme } from '../type';
import { appTheme } from '../theme';
import { useKeyPress } from '../hooks/use-key-press';
import { Storage } from '../utils/storage';
import Themed, { ThemeProvision } from '../containers/themed';
import { Icon } from '../icons';

const iconMap = {
  dark: 'night' as const,
  blue: 'bluetooth' as const,
  light: 'sun' as const,
};
const themes = Object.keys(iconMap) as Array<keyof typeof iconMap>;

function ThemeIcon({ theme, changeTheme }: ThemeProvision) {
  const cycleAppTheme = useCallback(() => {
    const nextTheme = cycleTheme(theme);
    Storage.saveTheme(nextTheme.theme);
    changeTheme(nextTheme);
  }, [theme.theme]);
  useKeyPress('t', cycleAppTheme);

  return (
    <Button aria-label="Change theme" onClick={cycleAppTheme}>
      <Icon type={iconMap[theme.theme]} color={theme.accent} />
    </Button>
  );
}

const MemoizedThemeIcon = memo(ThemeIcon);

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

const cycleTheme = ({ theme }: ITheme): ITheme => {
  const themeIndex = themes.indexOf(theme);
  const nextIndex = (themeIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  return appTheme(nextTheme);
};

const ThemeIconContainer = () => <Themed render={MemoizedThemeIcon} />;

export default ThemeIconContainer;

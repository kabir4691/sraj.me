import React, { memo, useContext, useCallback } from 'react';
import { Icon } from '../icons';

import styled from '@emotion/styled';
import { StateContext } from '../state';
import { ITheme } from '../type';
import { appTheme } from '../theme';

const iconMap = {
  dark: 'night' as const,
  light: 'sun' as const,
};

function ThemeIcon() {
  const { theme, changeTheme } = useContext(StateContext);
  const onClick = useCallback(() => changeTheme(cycleTheme), [theme.theme]);
  return (
    <Button name="Change theme" onClick={onClick}>
      <Icon type={iconMap[theme.theme]} color={theme.accent} />
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

const cycleTheme = ({ theme }: ITheme): ITheme => {
  const themes = Object.keys(iconMap) as Array<keyof typeof iconMap>;
  const themeIndex = themes.indexOf(theme);
  const nextIndex = (themeIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  return appTheme(nextTheme);
};

export default memo(ThemeIcon);

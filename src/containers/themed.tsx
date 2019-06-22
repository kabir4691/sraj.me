import React, { useContext, memo } from 'react';

import { StateContext, IAppState } from '../state';

export type ThemeProvision = Pick<IAppState, 'theme' | 'changeTheme'>;

interface IThemedProps {
  render: (themeState: ThemeProvision) => React.ReactElement;
}

/**
 * Theme container provider
 */
function Themed({ render: Component }: IThemedProps) {
  const { theme, changeTheme } = useContext(StateContext);
  return (
    <Component
      theme={theme}
      changeTheme={changeTheme}
    />
  );
}

export default memo(Themed);

import React, { useContext, memo } from 'react';

import { StateContext, IAppState } from '../state';
import { pick } from '../utils/pick';

export type ThemeProvision = Pick<IAppState, 'theme' | 'changeTheme'>;

interface IThemedProps {
  render: (themeState: ThemeProvision) => React.ReactElement;
  props?: Array<keyof ThemeProvision>;
}

/**
 * Theme container provider
 */
function Themed({ render: Component, props: keys = [] }: IThemedProps) {
  const context = useContext(StateContext);
  const props = pick(context, keys);
  return <Component {...props} />;
}

export default memo(Themed);

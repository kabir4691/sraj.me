import React, { memo } from 'react';

import Themed, { ThemeProvision } from '../containers/themed';
import AvatarDark from './avatar-dark';
import AvatarLight from './avatar-light';

function Avatar({ theme: { theme } }: Pick<ThemeProvision, 'theme'>) {
  if (theme === 'dark') {
    return <AvatarDark />;
  }
  return <AvatarLight />;
}

const MemoizedAvatar = memo(Avatar);

const AvatarContainer = () => (
  <Themed render={MemoizedAvatar} props={['theme']} />
);

export default AvatarContainer;

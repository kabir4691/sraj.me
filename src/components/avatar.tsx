import React, { useContext, useMemo, memo } from 'react'
import { StateContext } from '../state';
import AvatarDark from './avatar-dark';
import AvatarLight from './avatar-light';

const Avatar = () => {
  const { theme: { theme } } = useContext(StateContext);
  if (theme === 'dark') {
    return (
      <AvatarDark />
    )
  }
  return <AvatarLight />;
};

export default memo(Avatar);

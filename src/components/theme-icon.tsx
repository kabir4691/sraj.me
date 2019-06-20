import React, { memo, useContext } from 'react'
import { Icon } from '../icons';

import styled from '@emotion/styled';
import { ThemeContext } from '../theme';

const iconMap = {
  dark: 'night' as const,
  light: 'sun' as const,
};

const ThemeIcon = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Icon type={iconMap[theme.theme]} />
    </Container>
  );
}

const Container = styled.span`
  cursor: pointer;
`;

export default memo(ThemeIcon);

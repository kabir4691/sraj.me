import React, { memo } from 'react';
import styled from '@emotion/styled';

import ThemeIcon from './theme-icon';

function Footer() {
  return (
    <Content>
      <Expando>
        <ThemeIcon />
      </Expando>
      © {new Date().getFullYear()} Shantanu Raj
    </Content>
  );
}

export default memo(Footer);

const Content = styled.footer`
  display: flex;
  padding: 20px;
  align-items: center;
`;

const Expando = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

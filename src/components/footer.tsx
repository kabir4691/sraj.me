import React, { memo } from 'react'
import styled from '@emotion/styled';

function Footer () {
  return (
    <Content>
      © {new Date().getFullYear()}
      {' '}
      Shantanu Raj
    </Content>
  )
}

export default memo(Footer)

const Content = styled.footer`
  padding: 20px;
`;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { memo } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Themed, { ThemeProvision } from '../containers/themed';
import { ITheme } from '../type';
import Footer from './footer';
import './layout.css';

interface ILayoutProps {
  children: JSX.Element[] | React.ReactElement;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Themed render={GlobalStyles} props={['theme']} />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
}

const GlobalStyles = ({ theme }: Pick<ThemeProvision, 'theme'>) => (
  <Global styles={style(theme).global} />
);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.main`
  padding: 24px;
`;

const style = (theme: ITheme) => ({
  global: css`
    html,
    body {
      background: ${theme.background};
      display: flex;
      flex-direction: column;
      color: ${theme.text};
    }

    body {
      border: 24px solid ${theme.accent};
      overflow: scroll;
    }

    a {
      color: ${theme.text};
    }

    .sh-icon svg {
      fill: ${theme.accent};
    }
  `,
});

export default memo(Layout);

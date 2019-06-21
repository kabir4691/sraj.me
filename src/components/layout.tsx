/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { ITheme } from '../type';
import { StateContext } from '../state';
import Footer from './footer';
import './layout.css';

interface ILayoutProps {
  children: JSX.Element[] | React.ReactElement;
}

export default function Layout({ children }: ILayoutProps) {
  const { theme } = useContext(StateContext);
  const styles = style(theme);

  return (
    <>
      <Global styles={styles.global} />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  );
}

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
    }

    a {
      color: ${theme.text};
    }
  `,
});

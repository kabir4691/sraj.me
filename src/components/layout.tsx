/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby'
import { ITheme } from '../type';
import { ThemeContext } from '../theme';

import Footer from './footer'
import './layout.css'

interface ILayoutProps {
  children: JSX.Element[] | React.ReactElement
}

export default function Layout({ children }: ILayoutProps) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const theme = useContext(ThemeContext)
  const styles = style(theme)

  return (
    <>
      <Global styles={styles.global} />
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Content = styled.main`
  max-width: 960px;
  padding: 20px;
`;

const style = (theme: ITheme) => ({
  global: css`
    html, body {
      background: ${theme.background};
      display: flex;
      flex-direction: column;
      color: ${theme.text};
      border: 16px solid ${theme.accent};
    }

    a {
      color: ${theme.text};
    }
  `,
})

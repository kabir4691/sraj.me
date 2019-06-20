/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ITheme } from '../type';
import { ThemeContext } from '../theme';

import Header from './header'
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

const style = (theme: ITheme) => ({
  background: {
    backgroundColor: theme.background,
  },
  container: {
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  }
})

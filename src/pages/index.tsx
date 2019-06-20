import React from 'react'
import { Link } from 'gatsby'

import Provider from '../containers/provider'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Provider>
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm Shantanu.</h1>
      <p>I architect and build apps.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </Provider>
)

export default IndexPage

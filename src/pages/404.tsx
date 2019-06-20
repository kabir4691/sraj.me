import React from 'react'

import Provider from '../containers/provider'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Provider>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </Provider>
)

export default NotFoundPage

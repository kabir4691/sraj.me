import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Outbound from '../components/outbound';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Shantanu.</h1>
    <p>I architect and build apps.</p>
    <p>Currently I work at <Outbound href="https://toggl.com">Toggl</Outbound> building their web-applications.</p>
    <p>I enjoy working with TypeScript and Go the most.</p>
    <p>Sometimes I dabble with Android too.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;

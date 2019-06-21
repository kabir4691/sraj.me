import React from 'react';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import SEO from '../components/seo';
import Outbound from '../components/outbound';
import ContactInfo from '../components/contact-info';
import styled from '@emotion/styled';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Split>
      <Pane>
        <h1>Hi, I'm Shantanu.</h1>
        <p>I architect and build apps.</p>
        <p>
          Currently I work at <Outbound href="https://toggl.com">Toggl</Outbound>{' '}
          building their web-applications.
        </p>
        <p>I enjoy working with TypeScript and Go the most.</p>
        <p>Sometimes I dabble with Android too.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Avatar />
        </div>
      </Pane>
      <Pane>
        <ContactInfo />
      </Pane>
    </Split>
  </Layout>
);

const Split = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


export default IndexPage;

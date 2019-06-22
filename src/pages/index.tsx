import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import SEO from '../components/seo';
import Outbound from '../components/outbound';
import Notes from '../components/notes';
import ContactInfo from '../components/contact-info';
import { Split, Pane } from '../components/ui';

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
        <div style={{ maxWidth: '412px', marginBottom: '1.45rem' }}>
          <Avatar />
        </div>
      </Pane>
      <SidePane>
        <Pane>
          <Notes />
        </Pane>
        <Pane>
          <ContactInfo />
        </Pane>
      </SidePane>
    </Split>
  </Layout>
);

const SidePane = styled(Pane)`
  @media (min-width: 960px) {
    align-items: flex-end;
  }
`

export default IndexPage;

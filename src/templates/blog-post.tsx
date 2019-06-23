/**
 * Blog post template
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { NoteQuery } from '../type';
import Layout from '../components/layout';
import DurationInfo from '../components/duration-info';

interface IBlogPostProps {
  data: {
    markdownRemark: NoteQuery
  }
}

function BlogPost ({ data: { markdownRemark } }: IBlogPostProps) {
  const {
    frontmatter: { title, date },
    html: __html,
    timeToRead,
  } = markdownRemark;
  return (
    <Layout>
      <Helmet
        title={`${title} — Shantanu Raj`}
      />
      <div>
        <Header>
          <h1>{title}</h1>
          <DurationInfo date={date} timeToRead={timeToRead} />
        </Header>
        <div dangerouslySetInnerHTML={{ __html }}></div>
      </div>
    </Layout>
  );
}

const Header = styled.header`
  margin-bottom: 72px;
`;

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

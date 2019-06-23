/**
 * Blog post template
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { MarkdownQuery, NoteData } from '../type';
import Layout from '../components/layout';

interface IBlogPostProps {
  data: {
    markdownRemark: MarkdownQuery<NoteData>
  }
}

function BlogPost ({ data: { markdownRemark } }: IBlogPostProps) {
  const { frontmatter: { title }, html: __html } = markdownRemark;
  return (
    <Layout>
      <Helmet
        title={title}
      />
      <Container>
        <div dangerouslySetInnerHTML={{ __html }}></div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
`;

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

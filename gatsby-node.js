/**
 * Node config
 */

const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  const { data, errors } = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  );

  if (errors) throw errors;

  data.allMarkdownRemark.edges.forEach(({ node }) => createPage({
    path: node.frontmatter.path,
    component: blogPostTemplate,
    context: {},
  }));
};

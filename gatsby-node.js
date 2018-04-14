const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.modifyWebpackConfig = ({ config }) =>
  config.merge({
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, './src/assets'),
        Styles: path.resolve(__dirname, './src/styles'),
        Utils: path.resolve(__dirname, './src/components/utils'),
        Layout: path.resolve(__dirname, './src/components/layout'),
        Atoms: path.resolve(__dirname, './src/components/atoms'),
        Molecules: path.resolve(__dirname, './src/components/molecules'),
        Organisms: path.resolve(__dirname, './src/components/organisms'),
      },
    },
  });

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.map(({ node }) =>
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/BlogPost.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        }),
      );

      resolve();
    });
  });
};

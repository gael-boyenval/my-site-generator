import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Seo from 'Utils/Seo';
import MainHero from 'Organisms/MainHero';
import PostList from 'Organisms/PostList';
import ProjectList from 'Organisms/ProjectList';

const Index = ({ data }) => (
  <Fragment>
    <Seo postData={{}} config={data.site.siteMetadata} />
    <MainHero title={data.site.siteMetadata.title} />
    <ProjectList projects={data.projects.edges} />
    <PostList posts={data.blogPosts.edges} />
  </Fragment>
);

Index.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Index;

/* eslint no-undef: "off" */
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        baseUrl
      }
    }
    projects: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fileAbsolutePath: { regex: "/(projects)/.*\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            order
            client
            mission
            myRole
            period
            brandColor
          }
          fields {
            slug
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(blogPosts)/.*\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

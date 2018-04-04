import React from 'react';
import PropTypes from 'prop-types';

import MainHero from '../components/organisms/MainHero';
import PostList from '../components/organisms/PostList';

const MediumPosts = ({ posts }) => (
  <section>
    <h4>{posts.totalCount} Posts</h4>

    {posts.edges.map(({ node }) => (
      <div key={node.id}>
        <a href={`https://medium.com/@ogrange/${node.uniqueSlug}`}>
          <h3>
            {node.title} <span color="#BBB">— {node.createdAt}</span>
          </h3>
        </a>
      </div>
    ))}
  </section>
);

MediumPosts.propTypes = {
  posts: PropTypes.shape({}).isRequired,
};

const Index = ({ data }) => (
  <div>
    <MainHero title={data.site.siteMetadata.title} />
    <PostList posts={data.allMarkdownRemark} />
    <MediumPosts posts={data.allMediumPost} />
  </div>
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
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          mediumUrl
          createdAt
          updatedAt
        }
      }
    }
  }
`;

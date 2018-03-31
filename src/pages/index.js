import React from 'react';
import Link from 'gatsby-link';

const Posts = ({ posts }) => (
  <section>
    <h4>{posts.totalCount} Posts</h4>

    {posts.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug} css={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>
            {node.frontmatter.title} <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </section>
);

const MediumPosts = ({ posts }) => (
  <section>
    <h4>{posts.totalCount} Posts</h4>

    {posts.edges.map(({ node }) => (
      <div key={node.id}>
        <a
          href={`https://medium.com/@ogrange/${node.uniqueSlug}`}
          css={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>
            {node.title} <span color="#BBB">— {node.createdAt}</span>
          </h3>
        </a>
      </div>
    ))}
  </section>
);

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <Posts posts={data.allMarkdownRemark} />
      <MediumPosts posts={data.allMediumPost} />
    </div>
  </div>
);

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

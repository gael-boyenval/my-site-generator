import React from 'react';
import PropTypes from 'prop-types';
import Seo from 'Utils/Seo';
import EditorialContent from 'Organisms/EditorialContent';
import PostHeader from 'Organisms/PostHeader';

/* eslint-disable react/no-danger */
const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { site } = data;
  return (
    <article>
      <Seo postData={post} config={site.siteMetadata} isBlogPost />
      <PostHeader
        title={post.frontmatter.title}
        publishDate={post.frontmatter.date}
        leadBodyCopy={post.frontmatter.leadBodyCopy}
      />
      <EditorialContent htmlAst={post.htmlAst} />
    </article>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default BlogPost;

/* eslint no-undef: "off" */
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        baseUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      htmlAst
      frontmatter {
        title
        date
        leadBodyCopy
      }
    }
  }
`;

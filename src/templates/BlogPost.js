import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default BlogPost;

/* eslint no-undef: "off" */
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

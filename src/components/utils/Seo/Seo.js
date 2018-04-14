import React from 'react';
/* eslint-disable-next-line */
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const getSchemaOrgJSONLD = ({
  isBlogPost, url, title, image, description, datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      title,
      name: title,
      alternateName: title,
    },
  ];

  return isBlogPost
    ? [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Jason Lengstorf',
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://lengstorf.com',
          name: 'Jason Lengstorf',
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': url,
        },
        datePublished,
      },
    ]
    : schemaOrgJSONLD;
};

const SEO = ({ postData, config, isBlogPost }) => {
  const postMeta = postData.frontmatter ? postData.frontmatter : {};
  const fields = postData.fields || {};

  const title = postMeta.title || config.title;
  const description = postMeta.description || postData.excerpt || config.description;

  const url = fields.slug ? `${config.baseUrl}${fields.slug}` : config.baseUrl;
  const datePublished = isBlogPost ? postMeta.date : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    description,
    datePublished,
  });

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  config: PropTypes.shape({}).isRequired,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any,
  }).isRequired,
};

SEO.defaultProps = {
  isBlogPost: false,
};

export default SEO;

module.exports = {
  siteMetadata: {
    title: 'Gaël BOYENVAL',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-component'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: '@ogrange',
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Gaël BOYENVAL',
  },
  plugins: [
    'gatsby-plugin-typography',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};

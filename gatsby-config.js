module.exports = {
  siteMetadata: {
    title: 'Gaël BOYENVAL, UI/UX designer et dev front freelance à Paris',
    baseUrl: 'http://www.gaelboyenval.fr',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-component', 'gatsby-remark-prismjs'],
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

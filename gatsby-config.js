module.exports = {
  siteMetadata: {
    title: 'Gaël BOYENVAL, UI/UX designer et dev front freelance à Paris',
    baseUrl: 'http://www.gaelboyenval.fr',
    social: {
      github: 'https://github.com/gael-boyenval',
      linkedin: 'https://www.linkedin.com/in/gaël-boyenval-5b931415/',
      medium: 'https://medium.com/@gael_boyenval',
      twitter: 'https://twitter.com/gael_boyenval',
    },
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

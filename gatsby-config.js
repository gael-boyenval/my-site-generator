module.exports = {
    siteMetadata: {
        title: 'Pandas eats a lot !',
    },
    plugins: [
        'gatsby-plugin-typography',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
    ],
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `http://www.rockwoodfrank.com`
  },
  plugins: [
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'media',
        path: `./media/`,
      },
    },
],
};